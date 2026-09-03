# Task Flow

Aplicativo de lista de tarefas (To-Do) desenvolvido em React Native com Expo, como atividade autoral sobre **Flexbox** e **StyleSheet**.

## ✅ Checklist da atividade

- **Todo estilo via `StyleSheet.create()`** → veja `styles.js`
- **Estilos separados da lógica** → `styles.js` (estilos) separado de `App.js` e `components/TaskItem.js` (lógica/estrutura)
- **`flexDirection`, `justifyContent`, `alignItems` e `flex`** → usados em `statsBar`, `filterRow`, `inputRow`, `taskItem`, `taskLeft`, `statItem`, entre outros
- **2+ seções com uso consciente de Flexbox**:
  1. **Barra de estatísticas** (`statsBar`): `flexDirection: 'row'` + `justifyContent: 'space-between'` + `alignItems: 'center'`, com `flex: 1` em cada cartão para dividir o espaço igualmente
  2. **Item de tarefa** (`taskItem`): `flexDirection: 'row'` + `justifyContent: 'space-between'` + `alignItems: 'center'`, com `flex: 1` no texto para ocupar o espaço restante
- **Responsividade básica** → `Dimensions.get('window')` em `styles.js` ajusta fontes/tamanhos em telas pequenas e grandes; `flexWrap` nos filtros evita estouro de layout
- **Organização visual clara** → Header, estatísticas, filtros, campo de nova tarefa e lista, cada um em sua própria seção
- **Cores e fontes coerentes** → paleta azul/verde (produtividade e foco) definida em `colors`, dentro de `styles.js`
- [ ] **Link do repositório no GitHub** → você precisa criar o repositório e colar o link (veja abaixo)
- [ ] **Print ou vídeo curto** → rode o app (veja abaixo) e tire o print/grave a tela

## 📁 Estrutura do projeto

```
task-flow-app/
├── App.js              # Lógica principal e composição da tela
├── styles.js            # Todos os estilos (StyleSheet.create) e paleta de cores
├── components/
│   └── TaskItem.js      # Componente do item de tarefa
├── app.json              # Configuração do Expo
├── package.json
└── README.md
```

## ▶️ Como rodar

1. Instale as dependências:
   ```
   npm install
   ```
2. Inicie o projeto com Expo:
   ```
   npx expo start
   ```
3. Escaneie o QR code com o app **Expo Go** (Android/iOS) ou pressione `w` para abrir no navegador.

## 📤 Como subir no GitHub

```
git init
git add .
git commit -m "Task Flow - atividade Flexbox e StyleSheet"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/task-flow-app.git
git push -u origin main
```

Depois, cole o link do repositório na entrega da atividade.

## 🎥 Print ou vídeo

Depois de rodar o app (passo "Como rodar"), tire um print da tela (ou grave um vídeo curto navegando pelos filtros, adicionando e concluindo tarefas) para anexar na entrega.
