import { Component, OnInit, NO_ERRORS_SCHEMA } from '@angular/core';
import { Codes } from 'src/app/Models/Codes';
import { CovidService } from 'src/app/Services/covid/covid.service';
import { saveAs } from 'file-saver';
import * as JsonToXML from "js2xmlparser";
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-top-cases-covid',
  templateUrl: './top-cases-covid.component.html',
  styleUrls: ['./top-cases-covid.component.css']
})
export class TopCasesCovidComponent implements OnInit {

  selected: string = '';
  data: [];
  options: Codes[];
  constructor(
    private _covidService: CovidService
  ) { }

  ngOnInit(): void {
    this._covidService.getTopTenCasesByRegion().subscribe((res: any) => {
      this.data = res.Regions;
      this.options = res.Codes
    });
  }

  selectedChange() {
    var filter = this.options.find(x => x.Iso === this.selected);
    this._covidService.getTopTenCasesByProvince(filter.Name, filter.Iso).subscribe((res: any) => {
      this.data = res;
    });
  }

  jsonExport() {
    const blob = new Blob([JSON.stringify(this.data)], { type: 'application/json' });
    saveAs(blob, 'Data.json');
  }

  xmlExport() {
    const blob = new Blob([JsonToXML.parse("Region", this.data)], { type: 'application/xml' });
    saveAs(blob, 'Data.xml');
  }

  csvExport(){
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Data');
    XLSX.writeFile(wb, 'Data.csv');
  }
}
