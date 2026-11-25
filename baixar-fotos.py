"""Execute com Python 3 em ambiente com internet para salvar as imagens localmente."""
from pathlib import Path
from urllib.request import Request, urlopen
root=Path(__file__).resolve().parent
photos={'hero': 'https://images.pexels.com/photos/5240737/pexels-photo-5240737.jpeg?auto=compress&cs=tinysrgb&w=2200', 'massagem': 'https://images.pexels.com/photos/6188042/pexels-photo-6188042.jpeg?auto=compress&cs=tinysrgb&w=1000', 'relaxante': 'https://images.pexels.com/photos/8988362/pexels-photo-8988362.jpeg?auto=compress&cs=tinysrgb&w=1000', 'miofascial': 'https://images.pexels.com/photos/27684620/pexels-photo-27684620.jpeg?auto=compress&cs=tinysrgb&w=1000', 'drenagem': 'https://images.pexels.com/photos/10893343/pexels-photo-10893343.jpeg?auto=compress&cs=tinysrgb&w=1000', 'spa': 'https://images.pexels.com/photos/1926811/pexels-photo-1926811.jpeg?auto=compress&cs=tinysrgb&w=1600'}
for name,url in photos.items():
    path=root/'assets'/f'{name}.jpg'
    with urlopen(Request(url,headers={'User-Agent':'Mozilla/5.0'}),timeout=45) as response:
        data=response.read()
    if not data.startswith(b'\xff\xd8'): raise ValueError(f'Imagem inválida: {name}')
    path.write_bytes(data)
    print(f'{name}: {len(data):,} bytes')
for file in ('index.html','style.css'):
    path=root/file
    text=path.read_text(encoding='utf-8')
    for name,url in photos.items(): text=text.replace(url,f'assets/{name}.jpg')
    path.write_text(text,encoding='utf-8')
print('Concluído. Imagens agora locais.')
