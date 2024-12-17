import CodeModal from '@/app/components/ui-components/CodeModal'
import React from 'react'

const FieldsetCode = () => {
  return (
    <div>
      <CodeModal>
        {`
    import React from "react";
    import {
    Description,
    Field,
    Fieldset,
    Input,
    Label,
    Legend,
    Select,
    Textarea,
    } from "@headlessui/react";  
     
    <Fieldset className="space-y-6 rounded-xl bg-lightgray dark:bg-dark p-6">
          <Legend className="text-base/7 font-semibold dark:text-white text-dark">
            Shipping Details
          </Legend>
          <Field>
            <Label className="text-ld font-medium text-sm">
              Street address
            </Label>
            <Input
              className="w-full ui-form-control rounded-md py-2 px-3 mt-3"
            />
          </Field>
          <Field>
            <Label className="text-ld font-medium text-sm">
              Country
            </Label>
            <Description className="text-bodytext text-xs mt-1">
              We currently only ship to North America.
            </Description>
           
            <div className="relative">
              <Select
                className="ui-form-control  rounded-md mt-3"
              >
                <option>Canada</option>
                <option>Mexico</option>
                <option>United States</option>
              </Select>
            </div>
           
          </Field>
          <Field>
            <Label className="text-ld font-medium text-sm">
              Delivery notes
            </Label>
            <Description className="text-xs text-bodytext mt-1">
              If you have a tiger, we'd like to know about it.
            </Description>
            <Textarea
              className="ui-form-control rounded-lg mt-3"
              rows={3}
            />
          </Field>
        </Fieldset>
        `}
      </CodeModal>
    </div>
  )
}

export default FieldsetCode
