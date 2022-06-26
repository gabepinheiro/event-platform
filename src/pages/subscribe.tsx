import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { useMutation } from '@apollo/client'
import { CREATE_SUBSCRIBE_MUTATION } from '@/lib/mutations'

import { Logo } from '@/components'

import codeMockupImg from '@/assets/code-mockup.png'

type OnFormSubmitEvent = FormEvent<HTMLFormElement> & {
  currentTarget: {
    name: HTMLInputElement
    email: HTMLInputElement
  }
}

export default function Subscribe () {
  const [createSubsribe, { data, loading }] = useMutation(CREATE_SUBSCRIBE_MUTATION)
  const navigate = useNavigate()

  const handleSubscribe = async (e: OnFormSubmitEvent) => {
    e.preventDefault()

    const {
      name: { value: name },
      email: { value: email },
    } = e.currentTarget

    await createSubsribe({
      variables: {
        name,
        email,
      },
    })

    navigate('/event')
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className='w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto'>
          <div className='max-w-[648px]'>
            <Logo />

            <h1 className='mt-8 text-[2.5rem] leading-tight'>
              Construa uma <strong className='text-blue-500'>aplicação completa</strong>, do zero, com <strong className='text-blue-500'> React</strong>
            </h1>

            <p className='mt-4 text-gray-200 leading-relaxed'>Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.</p>
          </div>

          <div className='p-8 bg-gray-700 border border-gray-500 rounded'>
            <strong className='text-2xl mb-6 block'>Inscreva-se gratuitamente</strong>

            <form className='flex flex-col gap-2 w-full' onSubmit={handleSubscribe}>
              <input
                type='text'
                placeholder='Seu nome completo'
                name='name'
                className='bg-gray-900 rounded px-5 h-14'

              />
              <input
                type='email'
                placeholder='Digite esu email'
                name='email'
                className='bg-gray-900 rounded px-5 h-14'
               />

               <button
                type="submit"
                disabled={loading}
                className='mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50'
               >
                  Garantir minha vaga
               </button>
            </form>
          </div>
      </div>

      <img src={codeMockupImg} alt="" />
    </div>
  )
}
