import AllOrganizations from './AllOrganizations'
import CreateOrganization from './CreateOrganization'
import UpdateOrganization from './UpdateOrganization'
import FetchOrganization from './FetchOrganization'
import DeleteOrganization from './DeleteOrganization'

const Organization = () => {
  return (
    <main className="flex flex-row gap-4 px-4 py-4" style={{ minHeight: '90vh' }}>
      <section className="bg-slate-200 w-1/2 rounded overflow-auto">
        <AllOrganizations />
      </section>
      <section className="flex flex-col bg-slate-200 w-1/2 rounded p-4 gap-6">
        <div className="flex flex-row gap-12">
          <CreateOrganization />
          <UpdateOrganization />
        </div>
        <div className="flex flex-col gap-6">
          <FetchOrganization />
          <DeleteOrganization />
        </div>
      </section>
    </main>
  )
}

export default Organization