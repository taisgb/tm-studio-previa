# TM Studio de Massagem | Prévia

Site estático responsivo. Abra index.html ou publique em GitHub Pages. A prévia usa noindex.

## Fotografias
As imagens anteriores (recortes de referência) foram removidas. As novas fotografias ilustrativas vêm do Pexels e são solicitadas em 2200 px na hero, 1000 px nos cards e 1600 px no ambiente. A resolução entregue depende do CDN. O ambiente de desenvolvimento não conseguiu baixar nem renderizar os arquivos remotos. Para hospedá-las localmente, execute `python baixar-fotos.py` em uma máquina conectada; o script baixa os JPEGs e atualiza HTML/CSS. As fotos são ilustrativas, não do studio. Fontes e licença: https://www.pexels.com/license/

- hero: https://www.pexels.com/photo/5240737/
- massagem: https://www.pexels.com/photo/6188042/
- relaxante: https://www.pexels.com/photo/8988362/
- miofascial: https://www.pexels.com/photo/27684620/
- drenagem: https://www.pexels.com/photo/10893343/
- spa: https://www.pexels.com/photo/1926811/

## Instagram
A seção está pronta para exibir o feed automático, mas ainda não está conectada.
1. Acesse https://elfsight.com/instagram-feed-instashow/ e crie um widget de Instagram Feed.
2. Escolha a fonte Account (perfil público) e informe `tmstudiodemassagem`, se essa opção estiver disponível para o perfil. Alternativamente conecte a conta profissional com autorização do titular.
3. Escolha uma grade de 6 publicações e copie o UUID do código de incorporação (`elfsight-app-UUID`).
4. Cole somente esse UUID em `instagram-config.js`, no campo `elfsightWidgetId`. Publique novamente.
A frequência de sincronização e os limites de visitas dependem do provedor e do plano; não é transmissão instantânea. Enquanto não houver widget ativo, a página mostra o perfil oficial e um link. Não coloque tokens no front-end.
