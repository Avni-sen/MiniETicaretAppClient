import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})

export class SwalLoadingService {

  constructor() { }

  showLoading() {
    Swal.showLoading()
    Swal.fire({
      title: 'PeaseWait',
      allowOutsideClick: false,
      showCancelButton: false,
      showConfirmButton: false,
      color: '#000',
      willOpen: () => {
        Swal.showLoading();
      }
    });
  }

  hideLoading() {
    Swal.close();
  }

}

