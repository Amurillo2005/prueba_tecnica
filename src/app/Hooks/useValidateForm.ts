import { useState } from "react"

interface ValidationsErrors {
    codigo?: string;
    nombre?: string;
    descripcion?: string;
    cantidad?: string;
}

interface ProductFormValues {
    codigo: number;
    nombre: string;
    descripcion: string;
    cantidad: number;
}


export const useValidateForm = () => {

  const [error, setError] = useState<ValidationsErrors>({})

  const validate = (values: ProductFormValues) : boolean  => {
        const errors: ValidationsErrors = {}

        if (!values.codigo || values.codigo <= 0 || isNaN(values.codigo)) {
            errors.codigo = "El código es requerido, debe ser un número y mayor a 0"
        }

        if (!values.nombre.trim() || values.nombre.match(/^[0-9]+$/)) {
            errors.nombre = "El nombre es requerido y no debe contener numeros"
        }

        if (!values.descripcion.trim()) {
            errors.descripcion = "La descripción es requerida"
        }

        if (!values.cantidad || values.cantidad <= 0 || isNaN(values.cantidad)) {
            errors.cantidad = "La cantidad es requerida, debe ser un número y mayor a 0"
        }

        setError(errors)
        return Object.keys(errors).length === 0;
    }

  return {
    error, validate
  }
}