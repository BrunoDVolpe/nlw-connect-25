import { type ComponentProps, ReactNode } from "react"

// interface ButtonProps extends ComponentProps<'button'> {
//     children: ReactNode
// }

// export function Button(props: ButtonProps) {
//     return (
//         <button
//             className="flex justify-between items-center px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900"
//             {...props}
//         >
//             {props.children}
//         </button>
//     )
// }

// Como estou estendendo as propriedades de button, o button já espera receber Children, por isso simplificamos.

interface ButtonProps extends ComponentProps<'button'> {}

export function Button(props: ButtonProps) {
    return (
        <button
            className="flex justify-between items-center px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900"
            {...props}
        />
    )
}