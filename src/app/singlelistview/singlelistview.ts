import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apiservice } from '../apiservice';

@Component({
  selector: 'app-singlelistview',
  imports: [],
  templateUrl: './singlelistview.html',
  styleUrl: './singlelistview.css',
})
export class Singlelistview {
  singleproduct:any;
  constructor(private route:ActivatedRoute,private apiservice:Apiservice,private cdr:ChangeDetectorRef){}
  ngOnInit()
  {
    //parameter mapping
    const productid=this.route.snapshot.paramMap.get('titileid');
    if(productid)
    {
      this.apiservice.getSingleProduct(productid).subscribe((data)=>{
        this.singleproduct=data;
        //console.log(data);
          this.cdr.detectChanges()
      });
    }

  }


}
