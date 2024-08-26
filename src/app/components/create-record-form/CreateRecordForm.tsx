'use client';
interface CreateRecordFormProps {
createRecord: (formData: FormData) => void;
}

export default function CreateRecordForm(props: CreateRecordFormProps) {
  return (
    <div>
      <div>CreateRecordFrom</div>
      <form action={props.createRecord}>
      <h1>Create Record of Landlord/Tenant</h1>
      <div className="inputWrapper">
        <label htmlFor="name">Name</label>
        <input type="text" name="name"/>
      </div>
      <div className="inputWrapper">
        <label htmlFor="email">Email</label>
        <input type="text" name="email"/>
      </div>
      <button type="submit">Create</button>
    </form>
    </div>
  )
}

