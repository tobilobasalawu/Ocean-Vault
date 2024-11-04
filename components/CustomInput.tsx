import React from 'react';
import { Form, FormField, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const CustomInput = ({form, name, label, placeholder, type}) => {
    return (
        <div>
            <FormField
                  control={form.control}
                  name={name}
                  render={({ field }) => (
                    <div className ="form-item">
                      <FormLabel className = "form-label">
                        {label}
                      </FormLabel>
                      <div className = "flex w-full flex-col gap-1">
                        <FormControl>
                          <Input placeholder={placeholder} 
                            className = "input-class" 
                            type={type}
                            {...field}
                            />
                        </FormControl>
                        <FormMessage className = "form-message mt-2"/>
                      </div>
                    </div>
                  )}
                />
        </div>
    );
}



export default CustomInput