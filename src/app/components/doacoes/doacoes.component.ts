import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DoacoesGetModel } from './model/doacoes-get';
import { DoacoesService } from './services/services.doacoes';

@Component({
  selector: 'app-doacoes',
  templateUrl: './doacoes.component.html',
  styleUrls: ['./doacoes.component.scss']
})
export class DoacoesComponent implements OnInit {
  private getUnsubscribe$: Subject<void>;
  doacoes: MatTableDataSource<DoacoesGetModel>;
  displayedColumns: string[] = ['doador', 'tipo', 'valor', 'data'];
  pageInitial = 10;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(public doacoesService: DoacoesService) {
      this.getUnsubscribe$ = new Subject();
  }

  ngOnInit(): void {
      this.getDoacoes();
  }

  ngOnDestroy(): void {
      this.getUnsubscribe$.next();
      this.getUnsubscribe$.complete();
  }

  getDoacoes(): void {
      this.getUnsubscribe$.next();

      this.doacoesService
          .getDoadores()
          .pipe(takeUntil(this.getUnsubscribe$))
          .subscribe(response => {
              console.log(response)
              this.doacoes = new MatTableDataSource(response);
              this.doacoes.paginator = this.paginator;
          });
  }

  applyFilter(value: string): void {
      this.doacoes.filter = value;
  }

}
