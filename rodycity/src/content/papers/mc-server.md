# Minecraft Server: Guia passo a passo

**Atualizado em: 30/08/2025**

Este é um guia completo para criação de um servidor Minecraft moderno, incluindo proxy, sistema de login, lobby, permissões e sincronização. Seguindo este passo a passo, você terá um servidor eficiente, seguro e pronto para múltiplos sub-servidores.

## 1. Instalação do Java

Antes de começar, instale o **JDK 21** (mais recente) e/ou **Java 8** se necessário. Alguns servidores/plugins antigos exigem Java 8.

- Configure as variáveis de ambiente (`JAVA_HOME` e `PATH`) para evitar problemas de inicialização.
- Teste a instalação com: `java -version`

## 2. Configuração do Proxy

O proxy gerencia onde o jogador irá (lobby, minigames, survival, etc).

### 2.1 Escolha do proxy

- **BungeeCord** → antigo e simples.
- **Waterfall** → versão melhorada do BungeeCord.
- **Velocity** → moderno, eficiente e recomendado.

### 2.2 Criando start.bat (Windows)

```bat
@echo off
title SeuProxy
java -Xms512M -Xmx2G -jar velocity.jar nogui
pause
```

### 2.3 Configuração do proxy

Abra o `velocity.toml` e configure portas e servidores internos:

```toml
[servers]
lobby = "127.0.0.1:25566"
minigame = "127.0.0.1:25567"
```

Ajuste também modo online/offline conforme necessidade.

## 3. Sistema de Login

Para servidores offline (não originais):

- Instale **nLogin** no proxy.
- Use **BungeeGuard** para proteger conexões entre proxy e sub-servidores.

## 4. Configuração do Lobby

Plugins essenciais:

- ProtocolLib
- Vault
- PlaceholderAPI (PAPI)

Esses plugins permitem adicionar scoreboards, menus, economia e placeholders dinâmicos.

## 5. Permissões e Sincronização

- Instale **LuckPerms** em todos os servidores.
- Crie grupos (default, vip, staff) e defina permissões.
- Para sincronizar entre servidores, configure o LuckPerms com MySQL:

```yaml
storage-method: MySQL
data:
  address: "localhost:3306"
  database: "luckperms"
  username: "root"
  password: "suasenha"
```

⚠️ Use senha forte e firewall no banco.

## 6. Boas práticas

- Proteja portas com firewall (apenas o proxy acessível).
- Faça backups regulares de mundos, configs e banco de dados.
- Monitore desempenho com ferramentas como Spark ou flags de otimização.
- Teste antes de abrir ao público.

## Resumo da Estrutura

- **Proxy (Velocity)** → gerencia entrada dos jogadores.
- **Lobby** → ponto inicial com plugins essenciais.
- **Sub-servidores (Minigames, Survival)** → conectados via proxy.
- **Plugins** → nLogin, BungeeGuard, LuckPerms, Vault, PAPI, ProtocolLib.
- **Banco de dados (MySQL)** → sincronização de permissões e dados.

Seguindo este guia, você terá um servidor completo e funcional, pronto para adicionar novos minigames, sistemas de economia e funcionalidades avançadas.