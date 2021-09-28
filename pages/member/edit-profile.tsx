import SideBar from "../../components/organisms/SideBar";
import Image from 'next/image';
import Input from "../../components/atoms/Input";

export default function EditProfile() {
  return (
    <section className="edit-profile overflow-auto">
      <SideBar activeMenu="settings" />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
          <div className="bg-card pt-30 ps-30 pe-30 pb-30">
            <form action="">
              <div className="photo d-flex">
                <div className="position-relative me-20">
                  <img
                    src="/img/avatar-1.png"
                    width="90"
                    height="90"
                    className="avatar img-fluid"
                  />
                  <div className="avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center">
                    {/* <Image src="/icon/upload.svg" width={60} height={60} alt="icon uploads" /> */}
                  </div>
                </div>
                <div className="image-upload">
                  <label>
                    <Image src="/icon/upload.svg" width={90} height={90} alt="icon uploads" />
                  </label>
                  <input
                    id="avatar"
                    type="file"
                    name="avatar"
                    accept="image/png, image/jpeg"
                  />
                </div>
              </div>
              <div className="pt-30">
                <Input label="Nama Lengkap"/>
              </div>
              <div className="pt-30">
                <Input label="Alamat Email"/>
              </div>
              <div className="pt-30">
                <Input label="Nomor Hp"/>
              </div>
              <div className="button-group d-flex flex-column pt-50">
                <button
                  type="submit"
                  className="btn btn-save fw-medium text-lg text-white rounded-pill"
                  role="button"
                >
                 Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
}
