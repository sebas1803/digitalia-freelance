import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { MyDocument } from './document'
import { createReceipt } from '../services/receiptService'

function ReceiptForm() {
  const [form, setForm] = useState({})
  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const receipt = {
      logoURL: form.logo,
      currency: form.currency,
      amount: form.amount,
      title: form.title,
      description: form.description,
      billingAddress: form.address,
      firstname: form.firstname,
      lastname: form.lastname,
      documentType: form.documentType,
      documentNumber: form.documentNum
    }
    setForm({})
    console.log("receipt", receipt)
    createReceipt(receipt)
    event.target.reset();
    const data = receipt
    return (
      <div>
        <PDFDownloadLink document={<MyDocument data={data} />} fileName="somename.pdf">
          {({ blob, url, loading, error }) =>
            loading ? 'Loading document...' : 'Download now!'
          }
        </PDFDownloadLink>
      </div>
    )
  }

  return (
    <div className='form-container'>
      <Form onSubmit={handleSubmit}>
        <div className='form'>
          <div className='left-form'>
            <Form.Group className="mb-3" controlId="formFirstname">
              <Form.Label>Nombre(s)</Form.Label>
              <Form.Control type="text" placeholder="Escriba su(s) nombre(s)" onChange={e => setField('firstname', e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formLastname">
              <Form.Label> Apellidos</Form.Label>
              <Form.Control type="text" placeholder="Escriba sus apellidos" onChange={e => setField('lastname', e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formAddress">
              <Form.Label>Dirección</Form.Label>
              <Form.Control type="text" placeholder="Escriba su dirección" onChange={e => setField('address', e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formTypeDoc">
              <Form.Label>Tipo de documento</Form.Label>
              <Form.Select defaultValue={''} onChange={e => setField('documentType', e.target.value)} >
                <option value="" disabled>Seleccione una opción</option>
                <option value="DNI">DNI</option>
                <option value="CARNET">Carnet de extranjería</option>
                <option value="PASSPORT">Pasaporte</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formNumDoc">
              <Form.Label>Número documento</Form.Label>
              <Form.Control type="text" placeholder="Escriba el número de su documento" onChange={e => setField('documentNum', e.target.value)} />
            </Form.Group>
          </div>
          <div>
            <Form.Group className="mb-3" controlId="formLogo">
              <Form.Label>Logo</Form.Label>
              <Form.Control type="file" placeholder="Cargue su logo" onChange={e => setField('logo', e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCurrency">
              <Form.Label>Moneda</Form.Label>
              <Form.Select defaultValue={''} onChange={e => setField('currency', e.target.value)} >
                <option value="" disabled>Seleccione una opción</option>
                <option value="PEN">Soles</option>
                <option value="USD">Dolares americanos</option>
                <option value="CAD">Dolares canadiense</option>
                <option value="GBP">Libra esterlina</option>
                <option value="EUR">Euros</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPayment">
              <Form.Label>Monto del pago</Form.Label>
              <Form.Control type="text" placeholder="Escriba su monto a cobrar" onChange={e => setField('amount', e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formTitle">
              <Form.Label>Título</Form.Label>
              <Form.Control type="text" placeholder="Escriba el titulo para el recibo" onChange={e => setField('title', e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDesc">
              <Form.Label>Descripción</Form.Label>
              <Form.Control type="text" placeholder="Escriba la descripción para el recibo" onChange={e => setField('description', e.target.value)} />
            </Form.Group>
          </div>
        </div>

        <div className='button-form'>
          <Button variant="primary" type="submit">
            Enviar información
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default ReceiptForm;