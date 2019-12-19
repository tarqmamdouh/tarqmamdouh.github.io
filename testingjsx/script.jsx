class EarningsData extends React.Component {
    page_code(){
        return <div id={this.props.prefix + "earnings_dates"}>
            <table id={this.props.prefix + "_earnings_dates_topbar"} style="padding: 20px">
                <tr>
                    <td>
                        <label htmlFor="ed_days_before">From</label>
                        <input type="text" name="ed_days_before" id={this.props.prefix + "_ed_days_before"} value="-1" className="user-input" style="width: 50px"/>
                    </td>

                    <td>
                        <label htmlFor="ed_days_after">To</label>
                        <input type="text" name="ed_days_after" id={this.props.prefix +"_ed_days_after"} value="7" className="user-input" style="width: 50px" />
                    </td>

                    <td>
                        <input className="tl_button import_file_input" type='button' id={this.props.prefix +'_ed_get_prices'}
                               value="Refresh" />
                    </td>

                    <td>
                        <input className="tl_button import_file_input" type='button' id={this.props.prefix + '_get_summary'}
                               value="Summary" />
                    </td>

                    <td>
                        <input className="tl_button import_file_input" type='button' id={this.props.prefix + '_ed_download_filtered'}
                               value="Download Filtered" />
                    </td>

                    <td>
                        <input className="tl_button import_file_input" type='button' id={ this.props.prefix +'_ed_download_all'}
                               value="Download All" />
                    </td>

                    <td>
                        <input className="tl_button import_file_input" type='button' id={ this.props.prefix + '_ed_upload_filtered'}
                               value="Upload Filtered to S3" />
                    </td>

                    <td>
                        <input className="tl_button import_file_input" type='button' id={ this.props.prefix + '_ed_upload_all' }
                               value="Upload All to S3" />
                    </td>
                </tr>
            </table>
            <div id={this.props.prefix + "_earnings_dates_table"}></div>
            <div id={this.props.prefix + '_earnings_dates_summary_table'}></div>
        </div>
    }

    render() {
        return <h1> component loaded remotely </h1>
    }
}

ReactDOM.render(
  <EarningsData />,
  document.getElementById('container')
);
