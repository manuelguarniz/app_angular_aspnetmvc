(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{t1ug:function(e,t,o){"use strict";o.r(t),o.d(t,"CaPuntoControlModule",(function(){return ge}));var a=o("ofXK"),r=o("tyNb"),i=o("fXoL"),n=o("0IaG"),c=o("3Pt+"),s=o("XNiG"),l=o("1G5W"),b=o("mrSG"),d=o("XKlN");let m=(()=>{class e{constructor(e){this.id=(null==e?void 0:e.id)||0,this.nombre=(null==e?void 0:e.nombre)||"",this.departamento=(null==e?void 0:e.departamento)||null,this.unidadProduccion=(null==e?void 0:e.unidadProduccion)||null,this.areaId=(null==e?void 0:e.areaId)||null,this.libreAcceso=(null==e?void 0:e.libreAcceso)||!1,this.icon="edit",this.title="Modificar"}}return Object(b.b)([Object(d.e)()],e.prototype,"id",void 0),Object(b.b)([Object(d.e)(),Object(d.f)({message:"* Campo obligatorio."})],e.prototype,"nombre",void 0),Object(b.b)([Object(d.e)(),Object(d.f)({message:"* Campo obligatorio."})],e.prototype,"departamento",void 0),Object(b.b)([Object(d.e)(),Object(d.f)({message:"* Campo obligatorio."})],e.prototype,"unidadProduccion",void 0),Object(b.b)([Object(d.e)(),Object(d.f)({message:"* Campo obligatorio."})],e.prototype,"areaId",void 0),Object(b.b)([Object(d.e)()],e.prototype,"area",void 0),Object(b.b)([Object(d.e)()],e.prototype,"libreAcceso",void 0),Object(b.b)([Object(d.e)()],e.prototype,"estado",void 0),e})();var u=o("LAY5"),p=o("RrUJ"),h=o("EIzb"),f=o("Mdhe"),g=o("Js5l"),C=o("EHkv"),v=o("f0Cb"),P=o("bTqV"),U=o("Qu3c"),w=o("NFeN"),D=o("kmnG"),S=o("qFsG"),I=o("M2k1"),V=o("V4Kw"),O=o("d3UM"),A=o("bSwM"),y=o("FKr1");function G(e,t){if(1&e&&(i.Vb(0,"mat-option",15),i.Ic(1),i.Ub()),2&e){const e=t.$implicit;i.nc("value",e.id),i.Cb(1),i.Kc("",e.nombre," ")}}let x=(()=>{class e{constructor(e,t,o,a,r,i,n){this.formBuilder=e,this.alertModalService=t,this.dialogRef=o,this.data=a,this.caPuntoControlService=r,this.caAreaService=i,this.platformService=n,this.areaModel=[],this.controlDepartamento=new c.f,this.controlUProduccion=new c.f,this.listArea=[],this.loadingSave=!1,this.unsubscribe$=new s.a}ngOnInit(){this.tituloForm="",this.puntoControlFormGroup=this.formBuilder.formGroup(new m),this.data&&this.data.id?this.getPuntoControlById(this.data.id):this.tituloForm="Registrar Punto Control",this.obtenerAreas()}ngAfterViewInit(){}ngOnDestroy(){this.unsubscribe$.complete(),this.unsubscribe$.unsubscribe()}obtenerAreas(){this.caAreaService.obtenerAreasList().pipe(Object(l.a)(this.unsubscribe$)).subscribe(e=>{this.listArea=e})}getPuntoControlById(e){this.tituloForm="Modificar Punto de Control",this.caPuntoControlService.getPuntoControlById(e).pipe(Object(l.a)(this.unsubscribe$)).subscribe(e=>{this.puntoControlFormGroup=this.formBuilder.formGroup(new m(e)),this.controlDepartamento.setValue(e.departamento.id),this.controlUProduccion.setValue(e.unidadProduccion.id)})}save(){!this.loadingSave&&this.puntoControlFormGroup.valid&&(this.loadingSave=!0,this.caPuntoControlService.upsertPuntoControl(this.puntoControlFormGroup.value).pipe(Object(l.a)(this.unsubscribe$)).subscribe(e=>{this.loadingSave=!1,e>0&&(this.dialogRef.close(!0),this.alertModalService.alert(u.a.success,"Registro guardado"))}))}trackByFn(e,t){return t.id}changeValueDepartamento(e){let t=null;e&&(t={id:e.id,cia:e.cia,fechaEfectiva:p.a.parseUTCDateToString(e.fechaEfectiva),nombre:e.nombre}),this.puntoControlFormGroup.get("departamento").setValue(t)}changeValueUProduccion(e){this.puntoControlFormGroup.get("unidadProduccion").setValue(e)}}return e.\u0275fac=function(t){return new(t||e)(i.Pb(d.a),i.Pb(h.a),i.Pb(n.g),i.Pb(n.a),i.Pb(f.a),i.Pb(g.a),i.Pb(C.a))},e.\u0275cmp=i.Jb({type:e,selectors:[["pca-punto-control-forms"]],decls:31,vars:24,consts:[["mat-dialog-title",""],["layout","row","align","start"],[1,"form-button-row"],["mat-flat-button","","matTooltip","GUARDAR",1,"button-amarillo",3,"disabled","click"],["mat-flat-button","","mat-dialog-close","","matTooltip","CERRAR"],[3,"formGroup"],[1,"example-container"],["appearance","outline"],["matInput","","placeholder","Nombre","formControlName","nombre","name","nombre"],[3,"formControl","required","label","departamentoSelected"],[3,"formControl","required","label","uProduccionSelected"],["formControlName","areaId"],[3,"value",4,"ngFor","ngForOf"],[1,"example-section"],["formControlName","libreAcceso","name","libreAcceso",1,"example-margin",2,"font-size","small"],[3,"value"]],template:function(e,t){1&e&&(i.Vb(0,"div"),i.Vb(1,"h2",0),i.Ic(2),i.Ub(),i.Qb(3,"mat-divider"),i.Vb(4,"mat-dialog-actions",1),i.Vb(5,"div",2),i.Vb(6,"button",3),i.dc("click",(function(){return t.save()})),i.Vb(7,"mat-icon"),i.Ic(8,"save"),i.Ub(),i.Ub(),i.Vb(9,"button",4),i.Vb(10,"mat-icon"),i.Ic(11,"arrow_back"),i.Ub(),i.Ub(),i.Ub(),i.Ub(),i.Qb(12,"br"),i.Vb(13,"div"),i.Vb(14,"form",5),i.Vb(15,"div",6),i.Vb(16,"mat-form-field",7),i.Vb(17,"mat-label"),i.Ic(18,"Nombre * "),i.Ub(),i.Qb(19,"input",8),i.Ub(),i.Vb(20,"pca-autocomplete-departamento",9),i.dc("departamentoSelected",(function(e){return t.changeValueDepartamento(e)})),i.Ub(),i.Vb(21,"pca-autocomplete-unidad-produccion",10),i.dc("uProduccionSelected",(function(e){return t.changeValueUProduccion(e)})),i.Ub(),i.Vb(22,"mat-form-field",7),i.Vb(23,"mat-label"),i.Ic(24,"Area"),i.Ub(),i.Vb(25,"mat-select",11),i.Gc(26,G,2,2,"mat-option",12),i.Ub(),i.Ub(),i.Vb(27,"section",13),i.Vb(28,"mat-checkbox",14),i.Ic(29," Libre acceso(no requiere solicitud de acceso) "),i.Ub(),i.Ub(),i.Ub(),i.Qb(30,"br"),i.Ub(),i.Ub(),i.Ub()),2&e&&(i.Cb(2),i.Jc(t.tituloForm),i.Cb(4),i.Gb("spinner",t.loadingSave),i.nc("disabled",!t.puntoControlFormGroup.valid),i.Cb(8),i.nc("formGroup",t.puntoControlFormGroup),i.Cb(2),i.Fc("font-size",t.platformService.fontZize(),"rem")("width",100,"%"),i.Cb(4),i.Fc("width",100,"%"),i.nc("formControl",t.controlDepartamento)("required",!0)("label","Departamento"),i.Cb(1),i.Fc("width",100,"%"),i.nc("formControl",t.controlUProduccion)("required",!0)("label","Un. Producci\xf3n"),i.Cb(1),i.Fc("font-size",t.platformService.fontZize(),"rem")("width",100,"%"),i.Cb(4),i.nc("ngForOf",t.listArea))},directives:[n.h,v.a,n.c,P.b,U.a,w.a,n.d,c.w,c.q,c.j,d.g,D.b,D.f,S.b,c.c,c.p,c.h,d.k,d.h,I.a,c.g,c.u,V.a,O.a,a.l,A.a,y.o],styles:[".form-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] + .mat-form-field[_ngcontent-%COMP%]{margin-left:8px}.btn-sec[_ngcontent-%COMP%]{text-align:center}"]}),e})();var F=o("M9IT"),j=o("Dh3D"),E=o("+0xr");const M=["nombre","departamento","produccion","estado","operador_crea","accion"];var N=o("Bzqt"),T=function(e){return e.FormatoImportacion="Hoja4",e.MaestroArea="Hoja3",e.MaestroUP="Hoja2",e.MaestroDpto="Hoja1",e}({}),$=o("HDdC"),k=o("u/Yd");let L=(()=>{class e{constructor(e){this.excelHelperService=e,this.maestroArea=[],this.maestroDpto=[],this.maestroUP=[]}validationHeader(e){const t=[];if(e&&e.length){const o=Object.keys({"Nombre Punto Control":"","C\xf3digo Dpto":"","Libre Acceso":"","U. Producci\xf3n":"","\xc1rea":""}),a=Object.keys(e[0]);let r=0;for(const e of o)a[r]!==e&&t.push({line:1,message:`La cabecera "${a[r]}" deberia de cambiarse por "${e}".`}),r++}return t}columnsDataParams(){}validationColumns(e){var t,o,a,r;let i=null;const n=[];if(e&&e.length){const c=(null===(t=e.find(e=>e.sheetName===T.FormatoImportacion))||void 0===t?void 0:t.content)||[];this.maestroArea=(null===(o=e.find(e=>e.sheetName===T.MaestroArea))||void 0===o?void 0:o.content)||[],this.maestroDpto=(null===(a=e.find(e=>e.sheetName===T.MaestroDpto))||void 0===a?void 0:a.content)||[],this.maestroUP=(null===(r=e.find(e=>e.sheetName===T.MaestroUP))||void 0===r?void 0:r.content)||[];for(const e of c)e["Nombre Punto Control"]&&0===(""+e["Nombre Punto Control"]).trim().length&&n.push({line:e.numLine,message:'El campo "Nombre Punto Control" no debe ser vac\xedo'}),e["C\xf3digo Dpto"]&&0===(""+e["C\xf3digo Dpto"]).trim().length?n.push({line:e.numLine,message:'El campo "C\xf3digo Dpto" no debe ser vac\xedo'}):this.maestroDpto.some(t=>(""+t["Departamento Codigo"]).trim()===(""+e["C\xf3digo Dpto"]).trim())||n.push({line:e.numLine,dato:e["C\xf3digo Dpto"],message:`El campo "Departamento Descripcion" contiene un Departamento no registrado (Revisar Hoja: ${T.MaestroDpto})`}),e["Libre Acceso"]&&0===(""+e["Libre Acceso"]).trim().length?n.push({line:e.numLine,message:'El campo "Libre Acceso" no debe ser vac\xedo'}):"SI"!==e["Libre Acceso"]&&"NO"!==e["Libre Acceso"]&&n.push({line:e.numLine,dato:e["Libre Acceso"],message:'El campo "Libre Acceso" solo permite los siguientes valores: "SI" y "NO"'}),e["U. Producci\xf3n"]&&0===(""+e["U. Producci\xf3n"]).trim().length?n.push({line:e.numLine,message:'El campo "U. Producci\xf3n" no debe ser vac\xedo'}):this.maestroUP.some(t=>(""+t["UP Descripcion"]).trim()===(""+e["U. Producci\xf3n"]).trim())||n.push({line:e.numLine,dato:e["U. Producci\xf3n"],message:`El campo "U. Producci\xf3n" contiene una U. Producci\xf3n no registrado (Revisar Hoja: ${T.MaestroUP})`}),e.\u00c1rea&&0===(""+e.\u00c1rea).trim().length?n.push({line:e.numLine,message:'El campo "\xc1rea" no debe ser vac\xedo'}):this.maestroArea.some(t=>(""+t["Area Descripcion"]).trim()===(""+e.\u00c1rea).trim())||n.push({line:e.numLine,dato:e.\u00c1rea,message:`El campo "\xc1rea" contiene un \xc1rea no registrado (Revisar Hoja: ${T.MaestroArea})`});i=n&&n.length?{errors:n}:{sheets:this.parseExcelPuntoControl(c)}}return i}parseExcelPuntoControl(e){let t=[];return e&&e.length&&(t=e.map(e=>({nombrePuntoControl:e["Nombre Punto Control"],codigoDpto:this.maestroDpto.find(t=>(""+t["Departamento Codigo"]).trim()===(""+e["C\xf3digo Dpto"]).trim())["Departamento Codigo"],libreAcceso:"SI"===e["Libre Acceso"],uProduccion:this.maestroUP.find(t=>(""+t["UP Descripcion"]).trim()===(""+e["U. Producci\xf3n"]).trim())["UP Codigo"]||0,area:+(this.maestroArea.find(t=>(""+t["Area Descripcion"]).trim()===(""+e.\u00c1rea).trim())["Area Codigo"]||0)}))),t}getDataExcel(e){return new $.a(t=>{this.excelHelperService.readerExcel(e).subscribe(e=>{let o={};if(Array.isArray(e)&&e.length){const t=e.find(e=>e.sheetName===T.FormatoImportacion);if(t){const a=this.validationHeader(t.content);o=a&&a.length?{errors:a}:this.validationColumns(e)}else o={errors:[{line:0,message:"No existe la hoja: "+T.FormatoImportacion}]}}t.next(o)})})}}return e.\u0275fac=function(t){return new(t||e)(i.Zb(k.a))},e.\u0275prov=i.Lb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var R=o("Xa2L");function H(e,t){1&e&&(i.Vb(0,"mat-header-cell",33),i.Ic(1," Nombre "),i.Ub())}function _(e,t){if(1&e&&(i.Vb(0,"mat-cell"),i.Ic(1),i.Ub()),2&e){const e=t.$implicit;i.Cb(1),i.Kc(" ",e.nombre," ")}}function Q(e,t){1&e&&(i.Vb(0,"mat-header-cell",33),i.Ic(1," Departamento "),i.Ub())}function z(e,t){if(1&e&&(i.Vb(0,"mat-cell"),i.Ic(1),i.Ub()),2&e){const e=t.$implicit;i.Cb(1),i.Kc(" ",e.departamento.nombre," ")}}function K(e,t){1&e&&(i.Vb(0,"mat-header-cell",33),i.Ic(1," U. Producci\xf3n "),i.Ub())}function q(e,t){if(1&e&&(i.Vb(0,"mat-cell"),i.Ic(1),i.Ub()),2&e){const e=t.$implicit;i.Cb(1),i.Kc(" ",e.unidadProduccion.nombre," ")}}function B(e,t){1&e&&(i.Vb(0,"mat-header-cell",33),i.Ic(1," Estado "),i.Ub())}function W(e,t){if(1&e&&(i.Vb(0,"mat-cell"),i.Ic(1),i.Ub()),2&e){const e=t.$implicit;i.Cb(1),i.Kc(" ",e.estado," ")}}function J(e,t){1&e&&(i.Vb(0,"mat-header-cell",33),i.Ic(1," Operador Crea. "),i.Ub())}function X(e,t){if(1&e&&(i.Vb(0,"mat-cell"),i.Ic(1),i.Ub()),2&e){const e=t.$implicit;i.Cb(1),i.Kc(" ",e.operador_crea," ")}}function Z(e,t){1&e&&(i.Vb(0,"mat-header-cell"),i.Ic(1," Acci\xf3n "),i.Ub())}function Y(e,t){if(1&e){const e=i.Wb();i.Vb(0,"mat-cell"),i.Vb(1,"mat-icon",34),i.dc("click",(function(){i.Ac(e);const o=t.$implicit;return i.hc().editPuntoControl(o.id)})),i.Ic(2,"edit"),i.Ub(),i.Ub()}}function ee(e,t){1&e&&i.Qb(0,"mat-header-row")}function te(e,t){1&e&&i.Qb(0,"mat-row")}function oe(e,t){1&e&&(i.Vb(0,"div",35),i.Qb(1,"mat-progress-spinner",36),i.Ub())}function ae(e,t){1&e&&(i.Vb(0,"mat-header-cell",37),i.Ic(1," L\xednea "),i.Ub())}function re(e,t){if(1&e&&(i.Vb(0,"mat-cell",38),i.Ic(1),i.Ub()),2&e){const e=t.$implicit;i.Cb(1),i.Kc(" ",e.line," ")}}function ie(e,t){1&e&&(i.Vb(0,"mat-header-cell",39),i.Ic(1," Dato "),i.Ub())}function ne(e,t){if(1&e&&(i.Vb(0,"mat-cell",40),i.Ic(1),i.Ub()),2&e){const e=t.$implicit;i.Cb(1),i.Kc(" ",e.dato," ")}}function ce(e,t){1&e&&(i.Vb(0,"mat-header-cell",33),i.Ic(1," Mensaje "),i.Ub())}function se(e,t){if(1&e&&(i.Vb(0,"mat-cell"),i.Ic(1),i.Ub()),2&e){const e=t.$implicit;i.Cb(1),i.Kc(" ",e.message," ")}}function le(e,t){1&e&&i.Qb(0,"mat-header-row")}function be(e,t){1&e&&i.Qb(0,"mat-row")}const de=function(){return[10,20,50,100]},me=[{path:"",component:(()=>{class e{constructor(e,t,o,a,r){this.dialog=e,this.caPuntoControlService=t,this.platformService=o,this.caPuntoControlInternalService=a,this.alertModalService=r,this.paginator=new i.E,this.sort=new i.E,this.displayedColumns=M,this.displayedColumnsError=N.a,this.dataSource=new E.k,this.dataSourceErrors=new E.k,this.loadingTable=!1,this.loadingDownloadFile=!1,this.loadingImportFile=!1,this.unsubscribe$=new s.a}ngOnInit(){this.listPuntoControl()}ngAfterViewInit(){this.settingTable()}ngOnDestroy(){this.unsubscribe$.complete(),this.unsubscribe$.unsubscribe()}settingTable(){this.dataSource.paginator=this.paginator.toArray()[0],this.dataSource.sort=this.sort.toArray()[0],this.dataSourceErrors.paginator=this.paginator.toArray()[1],this.dataSourceErrors.sort=this.sort.toArray()[1]}listPuntoControl(){this.dataSource.data=[],this.loadingTable=!0,this.caPuntoControlService.getListPuntoControlByUnidadProduccion().pipe(Object(l.a)(this.unsubscribe$)).subscribe(e=>{this.loadingTable=!1,e.length>0&&(this.dataSource.data=e)})}refreshTable(){this.listPuntoControl()}addPuntoControl(){this.dialog.open(x,{width:"550px",height:this.platformService.WINDOW_MEDIUM>=this.platformService.windowWidth?"70vh":"50vh",disableClose:!0}).afterClosed().pipe(Object(l.a)(this.unsubscribe$)).subscribe(e=>{e&&this.refreshTable()})}editPuntoControl(e){this.dialog.open(x,{data:{id:e},width:"550px",height:this.platformService.WINDOW_MEDIUM>=this.platformService.windowWidth?"70vh":"50vh",disableClose:!0}).afterClosed().pipe(Object(l.a)(this.unsubscribe$)).subscribe(e=>{e&&this.refreshTable()})}downloadFormato(){this.loadingDownloadFile||(this.loadingDownloadFile=!0,this.caPuntoControlService.obtenerSerializadoFormatoImportacion().pipe(Object(l.a)(this.unsubscribe$)).subscribe(e=>{this.loadingDownloadFile=!1,e&&p.a.saveAsExcelFile(e,"formato_importacion_punto_control.xlsx")}))}selectFile(e){this.dataSourceErrors.data=[],this.loadingImportFile=!0,this.caPuntoControlInternalService.getDataExcel(e.target.files[0]).pipe(Object(l.a)(this.unsubscribe$)).subscribe(e=>{e.sheets?this.caPuntoControlService.importMasivoPuntoControl(e.sheets).pipe(Object(l.a)(this.unsubscribe$)).subscribe(e=>{this.loadingImportFile=!1,e&&(this.alertModalService.alert(u.a.success,"El archivo se ha cargado con \xe9xito."),this.refreshTable())}):(this.loadingImportFile=!1,this.dataSourceErrors.data=e.errors,this.alertModalService.alert(u.a.error,"Archivo con errores, revisar en la secci\xf3n correspondiente."))})}}return e.\u0275fac=function(t){return new(t||e)(i.Pb(n.b),i.Pb(f.a),i.Pb(C.a),i.Pb(L),i.Pb(h.a))},e.\u0275cmp=i.Jb({type:e,selectors:[["pca-punto-control-list"]],viewQuery:function(e,t){var o;1&e&&(i.Nc(F.a,!0),i.Nc(j.a,!0)),2&e&&(i.wc(o=i.ec())&&(t.paginator=o),i.wc(o=i.ec())&&(t.sort=o))},decls:62,vars:17,consts:[[1,"example-button-row"],["mat-raised-button","","matTooltip","AGREGAR",1,"button-amarillo",3,"click"],[1,"material-icons"],["mat-raised-button","","matTooltip","REFRESCAR",1,"button-amarillo",3,"click"],["mat-raised-button","","type","submit",1,"button-amarillo",3,"click"],["matTooltip","Descargar formato de importaci\xf3n"],["matTooltip","Importar solicitudes"],["hidden","","type","file","name","import","accept",".xlsx,.xlx","onclick","this.value=null",3,"change"],["inputFile",""],[1,"mat-elevation-z8"],["matSort","",3,"dataSource"],["matColumnDef","nombre"],["mat-sort-header","",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","departamento"],["matColumnDef","produccion"],["matColumnDef","estado"],["matColumnDef","operador_crea"],["matColumnDef","accion"],[4,"matHeaderCellDef"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],["class","container-spinner-loading",4,"ngIf"],["showFirstLastButtons","",3,"pageSizeOptions"],[1,"primary",2,"text-align","left",3,"hidden"],[1,"mat-elevation-z8",3,"hidden"],["matColumnDef","line"],["mat-sort-header","","style","max-width: 150px;",4,"matHeaderCellDef"],["style","max-width: 150px;",4,"matCellDef"],["matColumnDef","dato"],["mat-sort-header","","style","max-width: 200px;",4,"matHeaderCellDef"],["style","max-width: 200px;",4,"matCellDef"],["matColumnDef","mensaje"],["mat-sort-header",""],["matTooltip","Editar",1,"table-btn-editar",3,"click"],[1,"container-spinner-loading"],["color","primary","mode","indeterminate"],["mat-sort-header","",2,"max-width","150px"],[2,"max-width","150px"],["mat-sort-header","",2,"max-width","200px"],[2,"max-width","200px"]],template:function(e,t){if(1&e){const e=i.Wb();i.Vb(0,"h2"),i.Ic(1," PUNTO DE CONTROL"),i.Ub(),i.Vb(2,"section"),i.Vb(3,"div",0),i.Vb(4,"button",1),i.dc("click",(function(){return t.addPuntoControl()})),i.Vb(5,"span",2),i.Ic(6," add "),i.Ub(),i.Ub(),i.Vb(7,"button",3),i.dc("click",(function(){return t.listPuntoControl()})),i.Vb(8,"span",2),i.Ic(9," refresh "),i.Ub(),i.Ub(),i.Vb(10,"button",4),i.dc("click",(function(){return t.downloadFormato()})),i.Ic(11," Generar Formato "),i.Vb(12,"mat-icon",5),i.Ic(13,"download"),i.Ub(),i.Ub(),i.Vb(14,"button",4),i.dc("click",(function(){return i.Ac(e),i.xc(19).click()})),i.Ic(15," Importar "),i.Vb(16,"mat-icon",6),i.Ic(17,"upload"),i.Ub(),i.Vb(18,"input",7,8),i.dc("change",(function(e){return t.selectFile(e)})),i.Ub(),i.Ub(),i.Ub(),i.Ub(),i.Qb(20,"br"),i.Vb(21,"div",9),i.Vb(22,"mat-table",10),i.Tb(23,11),i.Gc(24,H,2,0,"mat-header-cell",12),i.Gc(25,_,2,1,"mat-cell",13),i.Sb(),i.Tb(26,14),i.Gc(27,Q,2,0,"mat-header-cell",12),i.Gc(28,z,2,1,"mat-cell",13),i.Sb(),i.Tb(29,15),i.Gc(30,K,2,0,"mat-header-cell",12),i.Gc(31,q,2,1,"mat-cell",13),i.Sb(),i.Tb(32,16),i.Gc(33,B,2,0,"mat-header-cell",12),i.Gc(34,W,2,1,"mat-cell",13),i.Sb(),i.Tb(35,17),i.Gc(36,J,2,0,"mat-header-cell",12),i.Gc(37,X,2,1,"mat-cell",13),i.Sb(),i.Tb(38,18),i.Gc(39,Z,2,0,"mat-header-cell",19),i.Gc(40,Y,3,0,"mat-cell",13),i.Sb(),i.Gc(41,ee,1,0,"mat-header-row",20),i.Gc(42,te,1,0,"mat-row",21),i.Ub(),i.Gc(43,oe,2,0,"div",22),i.Qb(44,"mat-paginator",23),i.Ub(),i.Qb(45,"br"),i.Vb(46,"h2",24),i.Ic(47,"Errores"),i.Ub(),i.Vb(48,"div",25),i.Vb(49,"mat-table",10),i.Tb(50,26),i.Gc(51,ae,2,0,"mat-header-cell",27),i.Gc(52,re,2,1,"mat-cell",28),i.Sb(),i.Tb(53,29),i.Gc(54,ie,2,0,"mat-header-cell",30),i.Gc(55,ne,2,1,"mat-cell",31),i.Sb(),i.Tb(56,32),i.Gc(57,ce,2,0,"mat-header-cell",12),i.Gc(58,se,2,1,"mat-cell",13),i.Sb(),i.Gc(59,le,1,0,"mat-header-row",20),i.Gc(60,be,1,0,"mat-row",21),i.Ub(),i.Qb(61,"mat-paginator",23),i.Ub()}2&e&&(i.Cb(10),i.Gb("spinner",t.loadingDownloadFile),i.Cb(4),i.Gb("spinner",t.loadingImportFile),i.Cb(8),i.nc("dataSource",t.dataSource),i.Cb(19),i.nc("matHeaderRowDef",t.displayedColumns),i.Cb(1),i.nc("matRowDefColumns",t.displayedColumns),i.Cb(1),i.nc("ngIf",t.loadingTable),i.Cb(1),i.nc("pageSizeOptions",i.qc(15,de)),i.Cb(2),i.nc("hidden",!t.dataSourceErrors||0==t.dataSourceErrors.data.length),i.Cb(2),i.nc("hidden",!t.dataSourceErrors||0==t.dataSourceErrors.data.length),i.Cb(1),i.nc("dataSource",t.dataSourceErrors),i.Cb(10),i.nc("matHeaderRowDef",t.displayedColumnsError),i.Cb(1),i.nc("matRowDefColumns",t.displayedColumnsError),i.Cb(1),i.nc("pageSizeOptions",i.qc(16,de)))},directives:[P.b,U.a,w.a,d.i,d.j,E.j,j.a,E.c,E.e,E.b,E.g,E.i,a.m,F.a,E.d,j.b,E.a,E.f,E.h,R.a],styles:["table[_ngcontent-%COMP%]{width:100%}.mat-sort-header-container[_ngcontent-%COMP%]{align-items:center}.highlight[_ngcontent-%COMP%]{background:#f1f1f1}.material-icons.md-10[_ngcontent-%COMP%]{font-size:16px;color:#d7a312}"],changeDetection:0}),e})()}];let ue=(()=>{class e{}return e.\u0275mod=i.Nb({type:e}),e.\u0275inj=i.Mb({factory:function(t){return new(t||e)},imports:[[r.d.forChild(me)],r.d]}),e})();var pe=o("PCNd"),he=o("xf9H"),fe=o("fawr");let ge=(()=>{class e{}return e.\u0275mod=i.Nb({type:e}),e.\u0275inj=i.Mb({factory:function(t){return new(t||e)},imports:[[a.c,pe.a,c.k,c.t,d.b,he.a,ue,fe.a]]}),e})()}}]);