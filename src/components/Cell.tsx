import { CellText } from "../types/CellText"

type Props = {
    text: CellText
    onClick: () => void
}

export const Cell = ({ text, onClick }: Props) => {
    return (
        <button onClick={onClick}>
            {text}
        </button>
    )
}