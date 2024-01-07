import axios from "axios";

const ApplyVisa = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const address = form.address.value;
    const occupation = form.occupation.value;
    const passportimg = form.passportimg.value;
    const prescriptionimg = form.prescriptionimg.value;
    const reports = form.reports.value;
    // const userinfo = {
    //   name,
    //   email,
    //   address,
    //   occupation,
    //   passportimg,
    //   prescriptionimg,
    //   reports,
    // };
    // console.log(userinfo)
    // const user = {
    //   name: name,
    //   email: email,
    // };
    // axios
    //   .post("http://localhost:80/MedicalTourism/index.php", user)
    //   .then((response) => {
    //     console.log(response);
    //   });
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="lg:w-80% mx-auto">
        <h1 className="text-center text-5xl font-bold my-20">Apply For Visa</h1>
        <form className="space-y-10" onSubmit={handleSubmit}>
          <div className="space-y-3">
            <h1 className="text-left text-2xl font-semibold">
              Passport Information
            </h1>
            <div className="grid grid-cols-2 gap-8 ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Present Address</span>
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  name="address"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Occupation</span>
                </label>
                <input
                  type="text"
                  placeholder="Occupation"
                  name="occupation"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <h1 className="text-left text-2xl font-semibold">
              Necessary Files
            </h1>
            <div className="grid grid-cols-2 gap-8">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Passport Image</span>
                </label>
                <input
                  type="file"
                  // placeholder="Occupation"
                  name="passportimg"
                  className=""
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Prescription Image</span>
                </label>
                <input
                  type="file"
                  // placeholder="Occupation"
                  name="prescriptionimg"
                  className=""
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Reports image</span>
                </label>
                <input
                  type="file"
                  // placeholder="Occupation"
                  name="reports"
                  className=""
                  multiple
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="my-10 btn btn-primary">Apply</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyVisa;
