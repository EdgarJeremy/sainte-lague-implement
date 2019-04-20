import React, { Component } from 'react';
import saintLague from './saintLague';

class App extends Component {

  state = {
    data: [{
      label: '',
      suara: ''
    }],
    seat: '',
    result: [],
    mode: 0
  }

  onChangeSeat(e) {
    this.setState({ seat: e.target.value });
  }

  onChangeLabel(e, i) {
    const { data } = this.state;
    data[i].label = e.target.value;
    this.setState({ data });
  }

  onChangeVote(e, i) {
    const { data } = this.state;
    data[i].suara = e.target.value;
    this.setState({ data });
  }

  onAdd() {
    const { data } = this.state;
    data.push({ label: '', suara: '' });
    this.setState({ data });
  }

  onDelete(i) {
    const { data } = this.state;
    data.splice(i, 1);
    this.setState({ data });
  }

  onHitung() {
    const { seat, data } = this.state;
    if(seat && seat !== 0) {
      const result = saintLague(seat, data);
      this.setState({ 
        mode: 1,
        result: result
      });
    } else {
      alert('Isi jumlah kursi');
    }
  }

  onBack() {
    this.setState({ mode: 0 });
  }

  render() {
    const { data, seat, mode, result } = this.state;

    return (
      <div className="App" style={{ backgroundColor: '#ffffff', maxWidth: '500px', margin: '20px auto', padding: '20px' }}>
        {mode === 0 ? (
          <div>
            <h1>Sainte-Lague</h1>
            <h2>Kalkulator Kursi Parlemen</h2>

            <div className="ui divider"></div>

            <div className="ui fluid labeled input">
              <div className="ui label">Kursi Dapil</div>
              <input type="number" placeholder="Jumlah kursi untuk dibagi..." value={seat} onChange={this.onChangeSeat.bind(this)} />
            </div>

            <div className="ui divider"></div>

            <table className="ui celled table">
              <thead>
                <tr>
                  <th className="two wide"></th>
                  <th className="seven wide">Partai</th>
                  <th className="seven wide">Suara</th>
                </tr>
              </thead>
              <tbody>
                {data.map((d, i) => (
                  <tr key={i}>
                    <td>
                      <div className={"ui vertical animated button fluid negative " + ((data.length === 1 ? 'disabled' : ''))} tabIndex="0" onClick={() => this.onDelete(i)}>
                        <div className="hidden content">Hapus</div>
                        <div className="visible content">
                          <i className="trash icon"></i>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="ui fluid input">
                        <input type="text" placeholder="Nama partai..." value={d.label} onChange={(e) => this.onChangeLabel(e, i)} />
                      </div>
                    </td>
                    <td>
                      <div className="ui fluid input">
                        <input type="number" placeholder="Jumlah suara..." value={d.suara} onChange={(e) => this.onChangeVote(e, i)} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="ui divider"></div>

            <div className="two ui buttons">
              <button className="ui green button" onClick={this.onAdd.bind(this)}>
                <i className="plus icon"></i> Tambah Data
              </button>
              <button className="ui blue button" onClick={this.onHitung.bind(this)}>
                <i className="angle right icon"></i> Hitung
              </button>
            </div>

            <div className="ui divider"></div>
          </div>
        ) : (
            <div>
              <h1>Sainte-Lague</h1>
              <h2>Kalkulator Kursi Parlemen</h2>

              <div className="ui divider"></div>
              <button className="ui fluid button" onClick={this.onBack.bind(this)}>
                <i className="angle left icon"></i> Kembali
              </button>

              <div className="ui divider"></div>
              <table className="ui celled table">
                <thead>
                  <tr>
                    <th>Partai</th>
                    <th>Kursi</th>
                  </tr>
                </thead>
                <tbody>
                  {result.map((r, i) => (
                    <tr key={i}>
                      <td>{r.label}</td>
                      <td>{r.kursi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

      </div>
    );
  }
}

export default App;
