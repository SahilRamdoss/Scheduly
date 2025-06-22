export default function Error404() {
  return (
    <>
      <div className="w-full h-full bg-(--color-cardPrimary) flex flex-col justify-center items-center">
        <div className="text-(--color-highlight) font-semibold text-5xl text-center">
          Page not found
        </div>
        <div className="loader hidden sm:flex">
          <div className="modelViewPort">
            <div className="eva">
              <div className="head">
                <div className="eyeChamber">
                  <div className="eye"></div>
                  <div className="eye"></div>
                </div>
              </div>
              <div className="body">
                <div className="hand"></div>
                <div className="hand"></div>
                <div className="scannerThing"></div>
                <div className="scannerOrigin"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}