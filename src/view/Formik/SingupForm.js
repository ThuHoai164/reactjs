import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
export default function SingupForm () {
    const formik = useFormik({
        // trangj tai ban dau
        initialValues:{    
            name:'',
            email:'',
            address:'',
            password:'',
            confirmpassword:''
        },

        // ktra du lieu
        valitdationSchema: Yup.object({
            name:Yup.string()
            //  kiem tra gioi han chu cai
             .min(5,"Your name must be at least 5 characters!")
             .max(25,"Your name must be under 25 characters!")
            //  Ban dien ten vao ko dc bo trong 
             .required("You must fill in this section!"),

            email:Yup.string()
            // Kiem tra email: VD nhu k co @,...
            .email('Invalid Email')
            .required('You must fill in this section!'),

            address:Yup.string()
            //  Ban dien ten vao ko dc bo trong 
             .required("You must fill in this section!"),

            password:Yup.string()
            .min(8,"Your name must be at least 8 characters!")
            .required("You must fill in this section!"),

            confirmpassword:Yup.string()
            // so sanh password ma nguoi dung maf dien phia tren neu ko khop no bao loi
            .oneOf([Yup.ref('password')], "Password does not match")
            .required("You must fill in this section!"),
            
        }),

        // submit nhung gia tri ma ho vua dien vao
        onSubmit: (values) =>{
            console.log(values)
        }
    });

    
  return (
    <div>
      <h3>Form</h3>
      <form onSubmit ={formik.handleSubmit}>
        <label>Name:</label>
        <input 
            type='text' 
            name="name" 
            value ={formik.values.name}
            onChange={formik.handleChange}
        />
        {/* Neu nhu co loi trong phan ten va khach hang da thay muc nay thi thong bao loi */}
        {formik.errors.name && formik.touched.name && (
            <p>{formik.errors.name}</p>
        )}

        <label>Email:</label>
        <input 
            type='text' 
            name="email" 
            value ={formik.values.email}
            onChange={formik.handleChange}
        />
        {formik.errors.email&& formik.touched.email && (
            <p>{formik.errors.email}</p>
        )}

        <label>Address:</label>
        <input 
            type='text' 
            name="address" 
            value ={formik.values.address}
            onChange={formik.handleChange}
        />
        {formik.errors.address && formik.touched.address && (
            <p>{formik.errors.address}</p>
        )}

        <label>Password:</label>
        <input 
            type='password' 
            name="password" 
            value ={formik.values.password}
            onChange={formik.handleChange}
        />
        {formik.errors.password && formik.touched.password && (
            <p>{formik.errors.password}</p>
        )}

        <label>Confirm password:</label>
        <input 
            type='password' 
            name="confirmpassword"
            value ={formik.values.confirmpassword}
            onChange={formik.handleChange}
        />
        {formik.errors.confirmpassword && formik.touched.confirmpassword && (
            <p>{formik.errors.confirmpassword}</p>
        )}

        <input type='submit' value='Submit Form'/>
      </form>
    </div>
  )
}
