# Projeto NestJS by Test
![Projeto Node.js](https://img.shields.io/badge/Node.js-20.16.0-%235FA04E?logo=nodedotjs)
![Projeto nvm](https://img.shields.io/badge/nvm-0.39.1-%23F4DD4B?logo=nvm)
![Projeto npm](https://img.shields.io/badge/npm-10.8.1-%23CB3837?logo=npm)
![Projeto NestJS](https://img.shields.io/badge/NestJS-10.3.10-%23E0234E?logo=nestjs)

Projeto meramente para meta de aprendizado

## Começando

Este projeto usará o ambiente docker portanto, antes de iniciar instale o [Docker](https://docs.docker.com/get-docker/) para que possa startar o projeto. Conforme infomado acima nas badges o projeto usará algumas tecnologias que precisam estar na versão indicada ou maior. Recomenda-se o uso da ferramenta [VS Code](https://code.visualstudio.com/) pela vasta quantidade de extensões e integração. O processo de instalação descrito tem como máquina um PC Windows com WSL Ubuntu.

### Pré-Requisito
- Node.js
- nvm
- npm
- Nest.js

### Instalações
Crie um diretório para o projeto dentro de home.
```sh
mkdir project-nest
```
```sh
cd project-nest
```
Instale o Node.js

##### # layouts.download.codeBox.installsNvm
```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```
##### # layouts.download.codeBox.downloadAndInstallNodejsRestartTerminal
```sh
nvm install 20
```
##### Instalar o Nest.js
```sh
npm i -g @nestjs/cli
```
<!--ts-->
   * [Sobre](#Começando)
   * [Tabela de Conteudo](#tabela-de-conteudo)
   * [Instalação](#instalacao)
   * [Como usar](#como-usar)
      * [Pre Requisitos](#pre-requisitos)
      * [Local files](#local-files)
      * [Remote files](#remote-files)
      * [Multiple files](#multiple-files)
      * [Combo](#combo)
   * [Tests](#testes)
   * [Tecnologias](#tecnologias)
<!--te-->
