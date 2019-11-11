import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonService } from 'src/app/service/common.service';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { SharedServiceService } from 'src/app/service/shared-service.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  //@ViewChild('hiddenInput',{static: false}) hiddenInput:ElementRef
  usersList : any = []
  registerFormData:any = {
    UserID : 0,
    UserName : "",
    FirstName : "",
    LastName : "",
    Password : "",
    Products : []
  }
  showUsers:boolean = true
  showRegister:boolean 
  dropdownList = [];
  selectedItems = [];
  powerBIData
  dropdownSettings:IDropdownSettings = {};
  constructor(private fb:FormBuilder,private cs:CommonService,private router:Router,private sharedService:SharedServiceService) { }
  registerForm = this.fb.group({
    username : ['',Validators.required],
    firstname : ['',Validators.required],
    lastname : ['',Validators.required],
    password : ['',Validators.required]
  })

  register(registerForm){
    this.registerFormData.UserName = registerForm.controls.username.value;
    this.registerFormData.FirstName = registerForm.controls.firstname.value;
    this.registerFormData.LastName = registerForm.controls.lastname.value;
    this.registerFormData.Password = registerForm.controls.password.value;
    let productsList = this.selectedItems;
    let products = []
    if(productsList && productsList.length>0){
      for(let i=0;i<productsList.length;i++){
        products.push(productsList[i].productName);
      }
    }
    this.registerFormData.Products = products;
    // let postData = {
    //   "Users" : this.registerFormData,
    //   "Products" : products
    // }
    this.cs.registerService(this.registerFormData)
      .subscribe((response:any)=>{
        //show Users list
        this.getUsers();
        alert("User added successfully!!");
      },(error)=>{
        console.log(error);
        alert("Error occured in Register,Please try again");
      })
  }

  update(registerForm){
    this.registerFormData.UserName = registerForm.controls.username.value;
    this.registerFormData.FirstName = registerForm.controls.firstname.value;
    this.registerFormData.LastName = registerForm.controls.lastname.value;
    this.registerFormData.Password = registerForm.controls.password.value;
    let productsList = this.selectedItems;
    let products = []
    if(productsList && productsList.length>0){
      for(let i=0;i<productsList.length;i++){
        products.push(productsList[i].productName);
      }
    }
    this.registerFormData.Products = products;
    this.cs.updateUserService(this.registerFormData)
      .subscribe((response:any)=>{
        //show Users list
        this.getUsers();
        alert("User updated successfully!!");
      },(error)=>{
        console.log(error);
        alert("Error occured in Update,Please try again");
      })
  }
  addUser(){
    this.showUsers=false
    this.showRegister=true
    this.selectedItems = [];
    this.registerForm.reset();
  }
  updateUser(user){
    this.showUsers = false;
    this.showRegister = false;
    this.selectedItems = [];
    console.log(user);
    //prefill user details
    this.registerFormData.UserID = user.UserID
    //filling product list
    for(let i=0;i<user.Products.length;i++){
      let productObj = {
        id : "",
        productName : ""
      }
      productObj.id = user.Products[i];
      productObj.productName = user.Products[i];
      this.selectedItems.push(productObj);
    }
    this.registerForm = this.fb.group({
      username : [user.UserName],
      firstname : [user.FirstName],
      lastname : [user.LastName],
      password : [user.Password]
    })
  }

  getUsers(){
     //get Users List data
     this.cs.getUsersService()
     .subscribe((res:any)=>{
       this.usersList = []
       //create usersList object
       for(let i=0;i<res.Users.length;i++){
          this.usersList.push(res.Users[i]);
       }
       for(let i=0;i<this.usersList.length;i++){
          if(this.usersList[i].UserID && res.Products[this.usersList[i].UserID]){
            this.usersList[i].Products = res.Products[this.usersList[i].UserID]
          }else{
            this.usersList[i].Products = []
          }
        }
       console.log("Users List "+this.usersList);
       this.showUsers = true;
     },(err)=>{
       console.log(err);
       alert("Unable to fetch users data, Please try again later")
     })
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  ngOnInit() {
    this.getUsers()

    //get powerbi data
    this.sharedService.getpowerBIData
      .subscribe(data=> {
        this.powerBIData = data
        for(let i=0;i<this.powerBIData.length;i++){
          for(let j=0;j<this.powerBIData[i].lstReport.length;j++){
            let productObj = {
              id : "",
              productName : ""
            }
            productObj.id = this.powerBIData[i].lstReport[j].Name;
            productObj.productName = this.powerBIData[i].lstReport[j].Name;
            this.dropdownList.push(productObj);
          }
        }
      });

    //multiselect dropdown 
    // this.dropdownList = [
    //   { item_id: 1, item_text: 'Mumbai' },
    //   { item_id: 2, item_text: 'Bangaluru' },
    //   { item_id: 3, item_text: 'Pune' },
    //   { item_id: 4, item_text: 'Navsari' },
    //   { item_id: 5, item_text: 'New Delhi' }
    // ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'productName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

}
