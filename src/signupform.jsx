import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("รูปแบบอีเมลไม่ถูกต้อง")
    .required("Required")
    .test(
      "custom-email-test",
      "อีเมลต้องมีชื่อโดเมนเฉพาะ Gmail",
      (value) => {
        return value && value.endsWith("@gmail.com");
      }
    ),
  password: Yup.string()
    .min(6, "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร")
    .matches(
      /(?=.*[a-z])/,
      "รหัสผ่านต้องประกอบด้วยตัวอักษรพิมพ์เล็กอย่างน้อย 1 ตัว"
    )
    .matches(
      /(?=.*[A-Z])/,
      "รหัสผ่านต้องประกอบด้วยตัวอักษรพิมพ์ใหญ่อย่างน้อย 1 ตัว"
    )
    .required("จำเป็นต้องระบุ"),
  nameTitleUK: Yup.string().required("จำเป็นต้องระบุ"),
  firstNameUK: Yup.string()
    .matches(/^[A-Z][a-z]*$/, "ชื่อต้องเริ่มด้วยตัวใหญ่และตามด้วยตัวเล็ก")
    .required("จำเป็นต้องระบุ"),
  lastNameUK: Yup.string()
    .matches(/^[A-Z][a-z]*$/, "นามสกุลต้องเริ่มด้วยตัวใหญ่และตามด้วยตัวเล็ก")
    .required("จำเป็นต้องระบุ"),
  firstNameTH: Yup.string()
    .matches(
      /^[ก-๏เ-์]+$/,
      "ชื่อต้องเป็นภาษาไทยเท่านั้นไม่สามารถมีตัวเลขหรืออักษรพิเศษได้"
    )
    .required("จำเป็นต้องระบุ"),
  lastNameTH: Yup.string()
    .matches(
      /^[ก-๏เ-์]+$/,
      "นามสกุลต้องเป็นภาษาไทยเท่านั้นไม่สามารถมีตัวเลขหรืออักขระพิเศษได้"
    )
    .required("จำเป็นต้องระบุ"),
  
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "เบอร์โทรศัพท์ต้องประกอบด้วยตัวเลข 10 หลักเท่านั้น")
    .required("จำเป็นต้องระบุ"),
  birthDay: Yup.number()
    .integer("Invalid day")
    .min(1, "Invalid day")
    .max(31, "Invalid day")
    .required("จำเป็นต้องระบุ"),
  birthMonth: Yup.number()
    .integer("Invalid month")
    .min(1, "Invalid month")
    .max(12, "Invalid month")
    .required("จำเป็นต้องระบุ"),
  birthYear: Yup.number()
    .integer("Invalid year")
    .min(1900, "Invalid year")
    .max(new Date().getFullYear(), "Invalid year")
    .required("จำเป็นต้องระบุ"),
});
function SignupForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      phone: "",
      firstNameUK: "",
      lastNameUK: "",
      nameTitleUK: "",
      firstNameTH: "",
      lastNameTH: "",
      nameTitleTH: "",
      birthDay: "",
      birthMonth: "",
      birthYear: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      console.log("ข้อมูลแบบฟอร์ม", values);
    },
  });
  return (
    <div className="container mt-3">
      <div className="border rounded p-4">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  อีเมล
                </label>
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-danger">{formik.errors.email}</div>
                ) : null}
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="password" className="form-label">
                    รหัสผ่าน
                  </label>
                  <input
                    className="form-control"
                    id="password"
                    type="password"
                    {...formik.getFieldProps("password")}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="text-danger">{formik.errors.password}</div>
                  ) : null}
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    เบอร์โทรศัพท์
                  </label>
                  <input
                    className="form-control"
                    id="phone"
                    type="tel"
                    {...formik.getFieldProps("phone")}
                  />
                  {formik.touched.phone && formik.errors.phone ? (
                    <div className="text-danger">{formik.errors.phone}</div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="nameTitleUK" className="form-label">
                  คำนำหน้าชื่อ (ภาษาอังกฤษ)
                </label>
                <select
                  className="form-select"
                  id="nameTitleUK"
                  {...formik.getFieldProps("nameTitleUK")}
                >
                  <option value="">เลือกคำนำหน้า</option>
                  <option value="Mr.">Mr.</option>
                  <option value="Mrs.">Mrs.</option>
                  <option value="Ms.">Ms.</option>
                </select>
                {formik.touched.nameTitleUK && formik.errors.nameTitleUK ? (
                  <div className="text-danger">{formik.errors.nameTitleUK}</div>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="firstNameUK" className="form-label">
                  ชื่อ (ภาษาอังกฤษ)
                </label>
                <input
                  className="form-control"
                  id="firstNameUK"
                  type="text"
                  {...formik.getFieldProps("firstNameUK")}
                />
                {formik.touched.firstNameUK && formik.errors.firstNameUK ? (
                  <div className="text-danger">{formik.errors.firstNameUK}</div>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="lastNameUK" className="form-label">
                  นามสกุล (ภาษาอังกฤษ)
                </label>
                <input
                  className="form-control"
                  id="lastNameUK"
                  type="text"
                  {...formik.getFieldProps("lastNameUK")}
                />
                {formik.touched.lastNameUK && formik.errors.lastNameUK ? (
                  <div className="text-danger">{formik.errors.lastNameUK}</div>
                ) : null}
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="nameTitleTH" className="form-label">
                  คำนำหน้าชื่อ (ภาษาไทย)
                </label>
                <select
                  className="form-select"
                  id="nameTitleTH"
                  {...formik.getFieldProps("nameTitleTH")}
                >
                  <option value="">เลือกคำนำหน้า</option>
                  <option value="นาย">นาย</option>
                  <option value="นางสาว">นางสาว</option>
                  <option value="นาง">นาง</option>
                  <option value="เพศทางเลือก">เพศทางเลือก</option>
                </select>
                {formik.touched.nameTitleTH && formik.errors.nameTitleTH ? (
                  <div className="text-danger">{formik.errors.nameTitleTH}</div>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="firstNameTH" className="form-label">
                  ชื่อ (ภาษาไทย)
                </label>
                <input
                  className="form-control"
                  id="firstNameTH"
                  type="text"
                  {...formik.getFieldProps("firstNameTH")}
                />
                {formik.touched.firstNameTH && formik.errors.firstNameTH ? (
                  <div className="text-danger">{formik.errors.firstNameTH}</div>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="lastNameTH" className="form-label">
                  นามสกุล (ภาษาไทย)
                </label>
                <input
                  className="form-control"
                  id="lastNameTH"
                  type="text"
                  {...formik.getFieldProps("lastNameTH")}
                />
                {formik.touched.lastNameTH && formik.errors.lastNameTH ? (
                  <div className="text-danger">{formik.errors.lastNameTH}</div>
                ) : null}
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="birthDay" className="form-label">
                  วันเกิด
                </label>
                <select
                  className="form-control"
                  id="birthDay"
                  {...formik.getFieldProps("birthDay")}
                >
                  <option value="">วันที่</option>
                  {Array.from({ length: 31 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
                {formik.touched.birthDay && formik.errors.birthDay ? (
                  <div className="text-danger">{formik.errors.birthDay}</div>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="birthMonth" className="form-label">
                  เดือนเกิด
                </label>
                <select
                  className="form-control"
                  id="birthMonth"
                  {...formik.getFieldProps("birthMonth")}
                >
                  <option value="">เดือน</option>
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
                {formik.touched.birthMonth && formik.errors.birthMonth ? (
                  <div className="text-danger">{formik.errors.birthMonth}</div>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="birthYear" className="form-label">
                  ปีเกิด
                </label>
                <select
                  className="form-control"
                  id="birthYear"
                  {...formik.getFieldProps("birthYear")}
                >
                  <option value="">ปี</option>
                  {Array.from(
                    { length: new Date().getFullYear() - 1900 + 1 },
                    (_, i) => (
                      <option key={1900 + i} value={1900 + i}>
                        {1900 + i}
                      </option>
                    )
                  )}
                </select>
                {formik.touched.birthYear && formik.errors.birthYear ? (
                  <div className="text-danger">{formik.errors.birthYear}</div>
                ) : null}
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
