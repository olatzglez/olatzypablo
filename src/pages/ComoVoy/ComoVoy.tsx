import Card from '../../components/Card'

function ComoVoy() {
  return (
    <section className="page">
      <h1>Cómo voy</h1>

      <h2>Bus</h2>
      <Card>
        <p>
          Un bus saldrá de <strong>Moyua</strong> (Delegación de Hacienda) a las <strong>12h</strong> y os dejará
          en Finca Isasi, Gordexola. A las <strong>01h</strong> saldrá de vuelta a Bilbao. El bus es gratuito y
          no hace falta reservar plaza, pero os pedimos que seáis puntuales.
        </p>
      </Card>

      <h2>Transporte público</h2>
      <Card>
        <p>
          La línea Bizkaibus A3343 (Bilbao - Sodupe - Gordexola) sale desde Bilbao Intermodal y
          para en la parada "Zubiete (Isasi)", a un paso de Finca Isasi.
        </p>
        <a
          href="https://www.bizkaia.eus/es/web/bizkaibus"
          target="_blank"
          rel="noopener noreferrer"
        >
          Consultar horarios en Bizkaibus
        </a>
      </Card>

      <h2>En coche particular</h2>
      <Card>
        <p>
          Aunque recomendamos ir en el bus facilitado, sois libres de ir en vuestro propio
          vehículo.
        </p>
      </Card>

      <h2>Uber/Cabify</h2>
      <Card>
        <p>Descarga la app antes de llegar para moverte con comodidad:</p>
        <p>
          <strong>Uber:{' '}</strong>
          <a href="https://apps.apple.com/us/app/uber-request-a-ride/id368677368" target="_blank" rel="noopener noreferrer">
            iOS
          </a>{' '}
          ·{' '}
          <a href="https://play.google.com/store/apps/details?id=com.ubercab" target="_blank" rel="noopener noreferrer">
            Android
          </a>
        </p>
        <p>
          <strong>Cabify:{' '}</strong>
          <a href="https://apps.apple.com/us/app/cabify/id476087442" target="_blank" rel="noopener noreferrer">
            iOS
          </a>{' '}
          ·{' '}
          <a href="https://play.google.com/store/apps/details?id=com.cabify.rider" target="_blank" rel="noopener noreferrer">
            Android
          </a>
        </p>
      </Card>

      <h2>Taxis de Bilbao</h2>
      <Card>
        <p><strong>Radio Taxi Bilbao:</strong> 944 44 88 88</p>
        <p><strong>Teletaxi Bilbao:</strong> 944 10 21 21</p>
        <p><strong>Radio Taxi Nervión:</strong> 944 26 90 26</p>
      </Card>
    </section>
  )
}

export default ComoVoy
