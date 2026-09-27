# MSB — Biblioteca Científica

Aplicativo online para biblioteca de microscopia e dados de meia-vida.

## Estrutura

- Aba **Microscopia**: comparação de duas imagens com concentração obrigatoriamente igual; cada lado possui dispositivo, tempo e amostra.
- Aba **Meia-vida**: gráfico científico separado por concentração, com média calculada por dispositivo + concentração + operador. O gráfico informa N, o número de amostras usadas em cada média.
- Administrador: cadastra imagens, cadastra ensaios manualmente e importa ensaios por Excel.
- Usuário: consulta microscopia e gráficos.

## Excel para meia-vida

A planilha deve ter uma linha por amostra e quatro colunas principais:

1. `Dispositivo`
2. `Concentração`
3. `Tempo de meia-vida`
4. `Operador`

Exemplo:

| Dispositivo | Concentração | Tempo de meia-vida | Operador |
|---|---:|---:|---|
| BFoam | 1,00 | 175 | Operador 01 |
| BFoam | 1,00 | 168 | Operador 01 |
| BFoam | 1,00 | 181 | Operador 01 |

Nesse caso, o aplicativo apresenta a média de 174,7 s e **N = 3** para BFoam / 1% / Operador 01.

O importador também aceita variações de nomes como `device`, `operator`, `concentracao (%)`, `meia-vida` e `half_life_seconds`.

## Banco

Supabase Auth controla acesso. PostgreSQL guarda metadados e resultados. Supabase Storage guarda as imagens em bucket privado.

## Configuração local

Crie `.env.local`:

```env
VITE_SUPABASE_URL=https://SEU-PROJETO.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=SUA_CHAVE_PUBLICAVEL
```

Depois:

```bash
npm install
npm run dev
```

Para validar produção:

```bash
npm run build
```

## Supabase

Execute `supabase/schema.sql` no SQL Editor. Para projeto já existente, o script adiciona a coluna `operator` e torna `laboratory` opcional, preservando os registros antigos.

Depois crie dois usuários no Authentication e ajuste o perfil administrativo conforme o UUID de cada usuário. Não coloque senhas nem a chave `service_role` no GitHub.

## Deploy

1. Suba o projeto em um repositório privado no GitHub.
2. Importe o repositório na Vercel.
3. Cadastre na Vercel as variáveis `VITE_SUPABASE_URL` e `VITE_SUPABASE_PUBLISHABLE_KEY`.
4. Faça o deploy.

## Armazenamento

O aplicativo usa Storage para as imagens e PostgreSQL apenas para os metadados. O bucket `microscopy` é privado.

## Exportação

Na aba Meia-vida:
- **Excel** gera duas planilhas: `Resumo` (médias e N) e `Dados` (medições individuais).
- **PDF** gera um relatório A4 paisagem com o gráfico e a tabela de médias.

## Observação

O `index-demo-v4.html` é uma demonstração local e não substitui o Supabase. Ele usa `localStorage` para testes e aceita importação de Excel no navegador.
