import { useEffect, useRef, useState } from 'react'

const useInput = (inputValue, defaultValue) => {
    const inputRef = useRef();
    const [focus, setFocus] = useState(false)
    const [value, setValue] = useState(null)
    useEffect(() => {
        focus && inputRef.current.focus()
    }, [focus])

    useEffect(() => {
        inputValue && inputValue(value)
    }, [value])

    useEffect(() => {
        defaultValue && setValue(defaultValue)
    }, [])


    return {
        setFocus,
        setValue,
        inputRef,
        value,
        focus
    }

}

export default useInput;