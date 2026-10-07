# LibreWolf

Atualizado em: 12/08/2026

Este é um resumo introdutório sobre o LibreWolf, destacando seus principais conceitos e aplicações. O LibreWolf é um navegador livre baseado no Firefox, com foco em privacidade, segurança e liberdade. Navegadores são a principal interface de acesso à web e, por isso, concentram uma quantidade significativa de informações sobre o usuário — desde configurações de sistema até padrões de comportamento. Compreender como esses dados são coletados é o primeiro passo para entender o que um navegador orientado à privacidade se propõe a resolver.

## Rastreamento

Refere-se ao conjunto de técnicas usadas para identificar, acompanhar e correlacionar as atividades de um usuário na web. O rastreamento não depende de uma única tecnologia, mas da combinação de vários sinais coletados durante a navegação. Parte desses sinais é enviada pelo próprio navegador, de forma legítima ou não; outra parte é obtida pelos sites visitados. Os três mecanismos mais relevantes são a telemetria, os rastreadores embutidos em páginas e o fingerprinting.

## Telemetria

Consiste na coleta automática de dados sobre a máquina e o desempenho do software, geralmente com o objetivo de orientar decisões de desenvolvimento. Inclui informações como versão do sistema operacional, recursos de hardware, frequência de uso de funcionalidades e ocorrência de falhas. Embora não identifique diretamente o usuário na maioria dos casos, a telemetria estabelece um canal permanente de envio de dados do navegador para servidores externos, cujo conteúdo nem sempre é transparente ou configurável.

## Rastreadores e anúncios

São componentes de terceiros carregados junto com o conteúdo de uma página, normalmente na forma de scripts, pixels ou iframes. Cada requisição feita a esses componentes expõe o endereço IP, o cabeçalho `User-Agent` e o referenciador da página, permitindo que um mesmo domínio observe o usuário em múltiplos sites distintos. Redes de anúncios utilizam essa correlação para construir perfis de interesse, e o mesmo mecanismo pode ser explorado para distribuição de conteúdo fraudulento ou malicioso.

## Fingerprinting

É uma técnica de identificação que combina atributos individualmente irrelevantes até obter um conjunto suficientemente único para distinguir um usuário entre milhões. Entre os atributos utilizados estão configurações do navegador, fontes instaladas, resolução e proporção de tela, características de hardware, sistema operacional e padrões de comportamento, como movimentação do cursor. Superfícies como Canvas e WebGL são particularmente úteis para esse fim, pois produzem resultados de renderização levemente diferentes conforme a combinação de GPU, drivers e sistema. Por não depender de cookies nem de armazenamento local, o fingerprinting permanece eficaz mesmo quando o endereço IP é mascarado por VPN ou proxy.

## Bloqueio de conteúdo

O LibreWolf distribui o uBlock Origin habilitado por padrão. Trata-se de um bloqueador de conteúdo de código aberto que filtra requisições a domínios de anúncios e rastreamento antes que sejam realizadas, atuando na camada de rede em vez de apenas ocultar elementos visuais. O efeito prático é a redução simultânea de exposição a rastreadores, de superfície de ataque e de tráfego desnecessário. A configuração padrão dispensa a instalação manual de extensões, o que evita que a proteção dependa de uma escolha ativa do usuário.

## Resistência a fingerprinting

O navegador habilita por padrão o RFP (Resist Fingerprinting), mecanismo herdado do Tor Browser e presente no Firefox. Em vez de tentar ocultar atributos individualmente, o RFP padroniza os valores reportados pelo navegador, de modo que usuários distintos apresentem o mesmo conjunto de características. São normalizados dados como fuso horário, idioma, resolução reportada e dimensões da janela, além de serem restringidas as leituras de Canvas e WebGL. O objetivo não é tornar o usuário invisível, mas torná-lo indistinguível dentro de um conjunto maior.

## Configurações padrão

Além dos mecanismos acima, o LibreWolf remove a telemetria do Firefox, desativa serviços de recomendação e patrocínio, limpa cookies e histórico ao fechar o navegador e utiliza o DuckDuckGo como mecanismo de busca padrão. O projeto é mantido de forma comunitária, com desenvolvimento hospedado no Codeberg e comunicação via Matrix, sem modelo de receita associado ao produto.

## Comparação com o Brave

O Brave adota o mesmo objetivo declarado — privacidade — mas parte de premissas distintas. É baseado no Chromium, incorpora bloqueio de conteúdo próprio e oferece uma janela privada com integração ao Tor, funcionalidade ausente no LibreWolf. Em contrapartida, é mantido por uma empresa com modelo de negócio próprio, que inclui assinaturas pagas como o Search Premium e um ativo digital próprio, o BAT. A diferença central, portanto, é estrutural: um projeto comunitário sem incentivo comercial em oposição a um produto cuja sustentação depende de monetização.

Há também uma diferença de calibragem. O Brave tende a equilibrar privacidade e compatibilidade, priorizando que sites funcionem sem intervenção do usuário. O LibreWolf tende a priorizar a configuração mais restritiva, aceitando o custo de eventuais falhas. A escolha entre os dois depende de qual desses lados o usuário está disposto a sacrificar.

## Limitações

A configuração padrão do LibreWolf provoca quebras de compatibilidade em parte dos sites, especialmente naqueles que dependem de leitura de Canvas, WebGL, fontes locais ou dimensões reais da janela. Sistemas de autenticação e de detecção de fraude também podem interpretar o comportamento padronizado do RFP como suspeito. Essas limitações são consequência direta do modelo de proteção adotado, e não defeitos de implementação: parte delas pode ser contornada por ajuste manual, ao custo de reduzir a proteção correspondente.

## Considerações finais

O LibreWolf é adequado a usuários que colocam privacidade acima de conveniência e aceitam intervir na configuração quando necessário. Para quem prioriza que a navegação funcione sem ajustes, alternativas mais permissivas tendem a ser mais confortáveis. A distinção relevante não é qual navegador oferece mais recursos, mas qual conjunto de compromissos corresponde ao uso pretendido — e, no caso do LibreWolf, esse compromisso é explícito e assumido pelo projeto desde o início.