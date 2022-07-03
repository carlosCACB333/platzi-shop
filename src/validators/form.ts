import * as Yup from 'yup';

const ProductSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, 'El título debe tener al menos 3 caracteres')
    .max(40, 'El título no debe ser mayor a 40')
    .required('El título es requerido'),
  price: Yup.number().min(0, 'El precio no puede ser negativo').required('El precio es requerido'),
  description: Yup.string()
    .min(3, 'La descripción debe tener al menos 3 caracteres')
    .required('La descripción es requerida'),
  categoryId: Yup.number().required('La categoría es requerida'),
  images: Yup.array().of(Yup.string()),
});

export { ProductSchema };
