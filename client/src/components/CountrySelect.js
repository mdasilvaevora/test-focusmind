import React, {useEffect} from 'react'
import { FormField } from './Form';
import { FormControl, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { countries } from '../mock/countries';

export function CountrySelect({id, value, handleChange, ...rest}) {
    const [optionValue, setOptionValue] = React.useState(countries.find(country => country.label === value))
    const [inputValue, setInputValue] = React.useState(value)

    useEffect(() => {
        setOptionValue(countries.find(country => country.label === value))
        setInputValue(value)
    }, [value])

    const handleInputChange = (evt,value) => {
        setInputValue(value)
        handleChange('country',value)
    }

    const handleOptionChange = (evt,value) => {
        console.log(value)
        setOptionValue(value)
    }

    return (
        <FormField>
            <FormControl style={{width: "100%"}}>
                <Autocomplete
                    id={id}
                    name={id}
                    value={optionValue}
                    inputValue={inputValue}
                    onInputChange={handleInputChange}
                    onChange={handleOptionChange}
                    options={countries}
                    getOptionLabel={(option) => option.label}
                    renderOption={(option) => (
                        <span>{option.label}</span>
                    )}
                    renderInput={(params) => 
                        <TextField
                            {...params}
                            label="País"
                            variant="outlined"
                        />
                    }
                />
            </FormControl>
        </FormField>
    )
}
