import { defineConfig } from 'orval'

export default defineConfig({
    api: {
        input: 'http://localhost:3333/docs/json',
        output: {
            target: './src/http/api.ts',
            client: 'fetch',
            httpClient: 'fetch',
            clean: true,
            baseUrl: 'http://localhost:3333',

            override: {
                fetch: {
                    includeHttpResponseReturnType: false,
                }
            }
        }
    }
})

//O orval será usado para automatizar o processo de pegar as rotas disponíveis no backend, disponibilizadas através
// do swagger.
// Rodar com "npx orval" para atualizar as rotas.
// client e httpClient ele optou por usar a fetch, mas poderíamos usar outras opções.
// o overide serve para sempre substituir o arquivo das rotas.