"""Monta o app a partir de src/.

Saídas:
  dist/app.html  versão publicada no claude.ai (artifact)
  index.html     versão do GitHub Pages (instalável, com service worker)
"""
import glob, os, re

ROOT = os.path.dirname(os.path.abspath(__file__))
src = lambda *p: os.path.join(ROOT, 'src', *p)

shell = open(src('shell.html'), encoding='utf8').read()
js = [open(f, encoding='utf8').read().rstrip('\n') for f in sorted(glob.glob(src('js', '*.js')))]
app = shell + '<script>\n' + '\n\n'.join(js) + '\n\ngo("guia");\n</script>\n\n</body></html>'

os.makedirs(os.path.join(ROOT, 'dist'), exist_ok=True)
open(os.path.join(ROOT, 'dist', 'app.html'), 'w', encoding='utf8').write(app)

head_add = ('<meta name="theme-color" content="#FFFFFF"><link rel="manifest" href="manifest.json">'
            '<link rel="icon" href="icons/icon-192.png"><link rel="apple-touch-icon" href="icons/icon-192.png">'
            '<meta name="apple-mobile-web-app-capable" content="yes"><meta name="mobile-web-app-capable" content="yes">'
            '<meta name="apple-mobile-web-app-title" content="Transpetro">')
gh = app.replace('</style></head>', '</style>' + head_add + '</head>', 1)
i = gh.rindex('\ngo("guia");')
gh = (gh[:i] + '\nif("serviceWorker" in navigator&&location.protocol==="https:")'
      '{navigator.serviceWorker.register("sw.js").catch(()=>{});}' + gh[i:])
# No GitHub o script vai num arquivo próprio: o navegador guarda o código já compilado
# (cache de bytecode do V8) e as próximas aberturas ficam mais rápidas.
a, b = gh.rindex('<script>\n'), gh.rindex('</script>')
open(os.path.join(ROOT, 'app.js'), 'w', encoding='utf8').write(gh[a + 9:b])
gh = gh[:a] + '<script src="app.js"></script>' + gh[b + 9:]
open(os.path.join(ROOT, 'index.html'), 'w', encoding='utf8').write(gh)

v = re.search(r'const C="transpetro-v(\d+)"', open(os.path.join(ROOT, 'sw.js'), encoding='utf8').read())
print(f'dist/app.html {len(app)} bytes · index.html {len(gh)} bytes · cache sw v{v.group(1) if v else "?"}')
