import {renderHook} from '@testing-library/react-hooks'
import { act } from 'react-test-renderer'
import useForm from './hook'

test('should change keyword',()=>{
    const {result}=renderHook(()=>useForm())
    
    act(()=>{
        result.current.updateKeyword('batman')
    })

    expect(result.current.keyword).toBe('batman')
})