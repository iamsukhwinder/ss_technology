import { HttpInterceptorFn, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import Swal from 'sweetalert2';

export const responseInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    tap({
      next: (event) => {
        if (event instanceof HttpResponse) {
          const message = (event.body as { message?: string } | null | undefined)?.message;

          if (message) {
            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: message,
              timer: 3000,
              showConfirmButton: false
            });
          }
        }
      },
      error: (error: HttpErrorResponse) => {
        const message = error.error?.message || "Something went wrong!";

        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: message,
          timer: 3000,
          showConfirmButton: false
        });
      }
    })
  );
};
