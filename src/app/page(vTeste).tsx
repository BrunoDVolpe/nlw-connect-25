import { Button } from '@/components/button'
import { IconButton } from '@/components/icon-button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { ArrowRight, Copy, Mail } from 'lucide-react'

export default function Home() {
  return (
    <main>
      <Button>
        Enviar
        <ArrowRight />
      </Button>

      <IconButton>
        <Copy />
      </IconButton>

      <div>
        {/* <Input type='email' placeholder='Digite o seu e-mail' /> */}
        {/* <Input type='email' placeholder='Digite o seu e-mail' error /> */}
        {/* o 'error' acima é equivalente a error={true} */}
        <InputRoot>
          <InputIcon>
            <Mail className="size-5" />
          </InputIcon>
          <InputField placeholder="Digite o seu e-mail" />
        </InputRoot>
      </div>
    </main>
  )
}
