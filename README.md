
```json
  REACT_APP_API_KEY = "AIzaSyDaMPyMAch-KfUjz8rcY1_X8gxOwl3wFsM"
  REACT_APP_AUTH_DOMAIN = "letmeask-fa1aa.firebaseapp.com"
  REACT_APP_DATABASE_URL = "https://letmeask-fa1aa-default-rtdb.firebaseio.com"
  REACT_APP_PROJECT_ID = "letmeask-fa1aa"
  REACT_APP_STORAGE_BUCKET = "letmeask-fa1aa.appspot.com"
  REACT_APP_MESSAGING_SENDER_ID = "294717189970"
  REACT_APP_APP_ID = "1:294717189970:web:bf4c17b948cf1f0516948B"
```

### Contextos

-- Apenas quando precisamos compartilhar informações globais entre componentes
-- Toda função async retorna uma Promise

Criar um contexto de authentication
  - Função de login async
  - Chamar a função no componente
  - Redirecionar no proprio componente

  ```javascript
    ...
    const { user, signIn } = useAuth();

    async function handleSignIn() {
      if(!user)
        await signIn()

      navigator.navigate('/screen')
    }
  ```