

type HeaderProps = {
    headerText: string

}

export function MyHeader({ headerText }: HeaderProps) {
    return <>
        <header className="flex justify-between items-center mb-4">
            <h1 className="text-2xl">{headerText}</h1>

        </header>
    </>
}