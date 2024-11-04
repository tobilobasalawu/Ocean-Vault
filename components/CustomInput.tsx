'use client';
import React from 'react';
import { Form, FormField, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Control } from 'react-hook-form';
import { authFormSchema } from '@/lib/utils';
import { z } from 'zod';

interface CustomInputProps {
    control: Control<z.infer<typeof authFormSchema>>;
    name: string;
    label: string;
    placeholder: string;
    type: string;
}

const CustomInput = ({control, name, label, placeholder, type}: CustomInputProps) => {
    return (
        <div>
          <FormField
                control={Form.control}
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