import { Component, OnInit } from '@angular/core';
import { SwalLoadingService } from 'src/app/admin/services/swal-loading.service';
import { CustomToastrService, ToastrMessageType } from 'src/app/admin/services/ui/custom-toastr.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private toastr: CustomToastrService, private loadingService: SwalLoadingService) { }

  ngOnInit() {
    this.loadingService.showLoading();
    setTimeout(() => {
      this.toastr.message('dslkjdslksd', 'Uyarı', ToastrMessageType.Error)
      this.loadingService.hideLoading()
    }, 3000);
  }

}
