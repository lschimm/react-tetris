import { useStage } from 'react'

// Functions
import { createStage } from '../gameHelpers'

export const useStage = () => {
    const [stage, setStage] = useState(createStage())

    return [stage, setStage]
}