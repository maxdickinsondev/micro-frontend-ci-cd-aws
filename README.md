# 🛒 Micro-Frontend E-commerce com Single-SPA

## 📌 Sobre o Projeto
Nos últimos dias estive estudando sobre a criação de **Micro-Frontend** utilizando o framework [**single-spa**](https://single-spa.js.org/).  
A arquitetura de **Micro-Frontend** consiste em dividir o front-end em pequenas aplicações independentes, permitindo benefícios como:

- 🚀 **Escalabilidade**
- 🛠 **Flexibilidade tecnológica**
- 🧩 **Facilidade de manutenção**
- 📦 **Deploys independentes**

Este repositório contém uma aplicação simples de **e-commerce** construída com essa abordagem.

---

## 🧩 Estrutura de Micro-Frontends
O projeto foi dividido em vários **MFEs (Micro-Frontends)**, cada um responsável por uma parte específica da aplicação:

- **Header**  
- **Home**  
- **Footer**  
- **Carrinho**  
- **Lista de desejos**  
- **Perfil do usuário**  
- **Contato** (menu)  
- **Sobre** (menu)  

Além disso:

- 🔄 **Estado compartilhado:**  
  Um MFE exclusivo para **gerenciamento de estado global**, permitindo que diferentes partes da aplicação se comuniquem.  
  Exemplo: ao adicionar um item ao carrinho na *Home*, o contador no ícone do *Header* é atualizado automaticamente.

- 🎨 **Biblioteca de componentes:**  
  Um MFE dedicado apenas a **componentes reutilizáveis** (botões, inputs, formulários etc.), garantindo reuso e separação de responsabilidades.

---

## ⚙️ Deploy Automatizado na AWS
A aplicação foi hospedada na **AWS** utilizando **GitHub Actions**, com a seguinte stack:

- **Amazon S3** → armazenamento dos builds de cada MFE  
- **Amazon CloudFront** → CDN para distribuição global  
- **AWS Certificate Manager** → certificado SSL  
- **AWS Route 53** → domínio customizado

<img width="1536" height="1024" alt="ChatGPT Image 21 de set  de 2025, 20_31_42" src="https://github.com/user-attachments/assets/08974b0b-ab10-44d8-9fd0-a7f5fa485d4b" />

### 🔄 Pipeline CI/CD
- Cada MFE é buildado de forma independente.  
- Apenas o MFE alterado é sincronizado com o bucket S3.  
- Isso garante **deploys rápidos e eficientes**, sem necessidade de publicar toda a aplicação novamente.  

> 💡 Esse é o verdadeiro **poder do Micro-Frontend**!

---

## 🌐 Acesso ao Projeto
A aplicação está disponível em:  
👉 [https://lnkd.in/dPerhDV6](https://lnkd.in/dPerhDV6)

---

## 🎯 Objetivo
O intuito deste projeto não foi criar um sistema completo, mas sim **praticar os conceitos de Micro-Frontend** com **single-spa**, além de explorar estratégias de:

- Comunicação entre MFEs  
- Reuso de componentes  
- Deploy independente em nuvem  

---

## 💬 Conclusão
E aí, você já conhecia o conceito de **Micro-Frontend**?  
Já estudou ou trabalhou com o **single-spa**?  

Sinta-se à vontade para abrir uma *issue* ou comentar suas experiências! 🚀
