import Image from "next/image"

export default function Aplicacao() {
    return (
        <div className="border">
            
            <Image
                className="p-3 m-2.5 float-left"
                src="/img/cidade.jpg"
                alt="Descrição"
                width={350}
                height={320}
            />

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum voluptatibus aperiam eaque temporibus, cupiditate, corrupti accusantium dolore quidem, ratione nemo voluptas nam animi molestias? Enim rem minima sit doloremque soluta!</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum voluptatibus aperiam eaque temporibus, cupiditate, corrupti accusantium dolore quidem, ratione nemo voluptas nam animi molestias? Enim rem minima sit doloremque soluta!</p>

        </div>
    )
}