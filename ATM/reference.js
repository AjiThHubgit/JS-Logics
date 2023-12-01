CustomerController.$inject=['$scope','$compile', '$location','$http', '$localStorage', 'urlservice', '$filter', '$rootScope','$route','$sessionStorage', 'DTOptionsBuilder', 'DTColumnDefBuilder','DTColumnBuilder','DTDefaultOptions','attendanceFilterDetails','$window'];
function CustomerController($scope,$compile, $location, $http, $localStorage, urlservice, $filter, $rootScope,$route,$sessionStorage, DTOptionsBuilder, DTColumnDefBuilder,DTColumnBuilder,DTDefaultOptions,attendanceFilterDetails,$window)
    {
        if ($localStorage.islogin === 'Y') {
            angular.element(document.getElementById('sidetopbar')).scope().getName();
            angular.element(document.getElementById('sidetopbar')).scope().getCurriculumLevel();
            angular.element(document.getElementById('sidetopbar')).scope().removeAllActive();
            angular.element(document.getElementById('sidetopbar')).scope().checkstudioexpired();
            angular.element(document.getElementById('sidetopbar')).scope().convCountCall();
            $rootScope.sideBarHide = false;
            $scope.matchtable_first = false;
            $rootScope.activepagehighlight = 'membership';
            $scope.payment_type_click_count = {"CC":"0","ACH":"0","MANUAL":"0","MIGRATE_EMAIL":"0"};
            $scope.dontShowmsgForCC = false;
            $scope.dontShowmsgForACH = false;
            $scope.dontShowmsgForManual = false;
            $scope.dontShowMigrationCheck = false;
            $('.active').removeClass('active');
            $('.activeview').removeClass('activeview');
            $rootScope.participant_toggle = true;
            tooltip.hide();
            $scope.wepaystatus = $localStorage.preview_wepaystatus;
            $rootScope.hide_main_menu = true;
            $scope.membershiplistcontents = [];
            $scope.emailmaincontent = {};
            $scope.emailmaincontent.subject='';
            $scope.emailmaincontent.message='';
            $rootScope.email_selected_module_id = "";
            $scope.selectedData = [];
            $scope.selected = {};
            $scope.selectAll = false;
            $scope.all_select_flag = $rootScope.all_select_flag_email = 'N';
            $rootScope.email_unselected_ids = [];
            $scope.email_unselected_list = false;
            $scope.isMembershipInfo = false;
            $scope.selectAll = false;
            $scope.selected_rank_name = "";
            $rootScope.email_selected_ids = [];
            $scope.processing_fee_type = 1;
            $scope.taxAmount = "";
            $scope.all_select_flag='N';
            $scope.color_green='N';
            $scope.uploaded_csv_file = "";
            $scope.attachcsvfile = "";
            $scope.migratefilepreview = "";
            $scope.valdateFlag = "N";
            $scope.runMode = "N";
            $scope.isShowPaymentInfo =false;
            $scope.lastPayDate = "";
            $localStorage.migration_flag = "N";CustomerController
            $scope.migrationModalIdentifier = {};
            $scope.activeTab = 'tab1';
            $scope.UpdateCsvCol = 'Select Field';
            $scope.mapMystudioFields = 'Select Field';
            $scope.migrationCSVfileType = '';
            $scope.getFileData = '';
            $scope.selectedItems = [];
            $scope.migrationDefaultObj = {
                "csv_result": {},
                "csv_headers": {},
                "mystudio_headers": [],
                "common_fields": [
                    {
                        "id": "P1",
                        "title": "Please select",
                        "is_required": false,
                        "is_selected": true
                    },
                    {
                        "id": "P2",
                        "title": "Do not map",
                        "is_required": false
                    }
                ],
                "mapping_field": [],
                "mapping_info": [],
                "mapping_view_info": [],
                "temp_csv_index": "",
                "temp_csv_header": "",
                "notMappedCount": 0
            };

            $scope.migrationObj = angular.copy($scope.migrationDefaultObj);
            $scope.hidemembership=false;
            $scope.showmember = false;
            $scope.reset_email_selected_ids();
            $rootScope.historyBack = 'N';
            $scope.pendingMigrationCount = 0;
            $scope.readyToMigrateCount = 0;
            $scope.clarificationCount = 0;     
            if($localStorage.membershippagetype == 'pendingmigration'){
                $scope.activeMigrationTab = 'P';
            }else{
                $scope.activeMigrationTab = '';
            }          
            $scope.mig_process_fee_type = '1';
            $scope.searchClearData = '';
            $rootScope.twilio_number = $localStorage.loginDetails.twilio_number;
            $scope.initialPrgmOptionName = 'All Memberships';
            if ($rootScope.fromOnholdDashboard === 'Y') {
                $scope.initialPrgmStatus = 'On Hold';
            } else {
            $scope.initialPrgmStatus = 'Active';
            }
            $scope.mempendingcount = 0;
            $scope.email_flag =false;
            $scope.sms_flag =false;
            $scope.temp_name = [];
            $scope.memoptions = [];
            $scope.memOptionId = [];
            $scope.custom_title_list=[];
            $scope.initialvalue = 'All Programs';
            $scope.programs_filter = false;
            $scope.selectedOptions = [];
            $rootScope.membership_ids_array = [];
            $rootScope.membership_option_ids_array = [];
            $scope.clearprogram = false;
            $scope.showTable = false; 
            $scope.showMigrateTable = false;
            $localStorage.ParticipantListPosSettingType = '';
            $scope.initialvalue = "All Programs";
            $scope.selectedmemId = [];
            $scope.call_hidecol = true;
            $scope.preview_emailedit_message = '';
            $scope.preview_emailsubject = '';
            $scope.show_del_flag = 'N';
            $scope.subscription_type = $scope.unsubscribe_phone_no = '';
            $scope.rank_list = [];
            $rootScope.selectedRankIdArray=[];
            $rootScope.selectedAgeFilter = 'all';
            $scope.email_report_flag = false;
            $sessionStorage.membership_reg_id = '';
            $sessionStorage.user_email_id = '';
            $scope.send_mail_option = 'week(s)';
            $scope.send_mail_week_list = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
            $scope.send_mail_month_list = ["day 1","day 2","day 3","day 4","day 5","day 6","day 7","day 8","day 9","day 10","day 11","day 12","day 13","day 14","day 15","day 16","day 17","day 18","day 19","day 20","day 21","day 22","day 23","day 24","day 25","day 26","day 27","day 28","day 29","day 30","last day"];
            if($scope.send_mail_option == 'week(s)'){
                $scope.send_mail_days_option = 'Monday';
            }else{
                $scope.send_mail_days_option = 'day 1';
            }
            $scope.isPendingSave = false;
            $scope.isProgramSave = false;
            $scope.clearPopData = function()
            {
                $scope.isMembershipInfo = false;
                $scope.isShowPaymentInfo =false;
                $scope.selectedProgramName = '';
                $scope.selectedMembershipOptionName = '';
                $scope.lastPayDateTemp = "";
                $scope.endDateTemp = "";
                $scope.nextPayDateTemp = "";
                $scope.buyerFname ="";
                $scope.buyerLname ="";
                $scope.buyerPhone ="";
                $scope.buyerEmail ="";
                $scope.buyerAddress ="";
                $scope.buyerCity ="";
                $scope.buyerState ="";
                $scope.buyerPcode ="";
                $scope.buyerCountry ="";
                $scope.participantFname ="";
                $scope.participantLname ="";
                $scope.dob ="";
                $scope.buyerCity ="";
                $scope.buyerState ="";
                var list=["input_pamount","input_tax_amount","input_first_name","input_last_name","input_phone","input_email","input_address","input_city","input_pcode","input_state","input_country","input_pfname","input_plname","input_dob",""]
                $scope.optionType= "";
                $scope.nextPayDate= "";
                $scope.lastPayDate= "";
                $scope.paymentType= "";
                $scope.card_last_four_digit= "";
                $scope.selected_rank_name= "";
                $scope.selected_rank_id = "";
                $scope.attendanceLimit= "";
                $scope.showClassType= "";
                $scope.classPackage= "";
                $scope.customFrequencyCount= "";
                $scope.paymentFrequency= "";
                $scope.paymentAmount= "";
                $scope.taxAmount= "";
                $scope.processing_fee_type = 1; 
                $scope.endDate= "";
                $scope.option= "";
                $scope.Program= "";
                $scope.participantNote= "";
                $scope.buyer_fname_err = false;
                $scope.buyer_lname_err = false;
                $scope.buyer_phone_err = false;
                $scope.buyer_email_err = false;
                $scope.buyer_address_err = false;
                $scope.buyer_city_err = false;
                $scope.buyer_state_err = false;
                $scope.buyer_postalcode_err = false;
                $scope.buyer_country_err = false;
                $scope.participant_fname_err = false;
                $scope.participant_lname_err = false;
                $scope.participant_dob_err = false;
                $scope.membership_category_err = false;
                $scope.membership_option_err = false;
                $scope.membership_enddate_err = false;
                $scope.payment_amount_err = false;
                $scope.payment_frequency_err = false;
                $scope.custom_frequency_value_err = false;
                $scope.custom_frequency_type_err = false;
                $scope.tax_percentage_err = false;
                $scope.processing_fee_err = false;
                $scope.next_payment_date_err = false;
                $scope.last_payment_date_err = false;
                $scope.payment_type_err = false;
                $scope.card_payment_err = false;
                $scope.participant_rank_err = false;
                $scope.attendance_limit_count_err = false;
                $scope.attendance_limit_frequency_err = false;
                $scope.no_of_classes_err = false;
                for(var i=0;i<$scope.custom_title_list.length;i++)
                {
                    $scope.custom_title_list[i].value = "";
                    $scope.catchCustomInput($scope.custom_title_list[i]);
                }
                for(var i=0;i<list.length;i++)
                {
                    $('#' + list[i]).removeClass('filled');
                    $('#' + list[i]).parents('.input-box').removeClass('focused');
                }
                $('#input_dob').datepicker('setDate', $scope.dob);
            }
            $scope.buyerFname ="";
            $scope.program = 1;
            $scope.total_program_records = '';
            $scope.show_total_rec = false;
            $scope.filter_email_forms = false;
            $scope.send_mail_limit = 1;
            $scope.send_mail_on = '';
            $scope.filterPopupShow = false;
            $rootScope.eventDropDownShow = false;
            $rootScope.filter_opt_count = '';
            $scope.btn_disable_count = '';
            $scope.filterOkCount = false;
            $rootScope.editedFilterOpt = '';
            $scope.save_update_type = '';
            $scope.new_save_filter_option = '';
            $scope.staffIds = [];
            $scope.search_placeholder_default = '';
            $scope.search_placeholder_manage = '';
            $scope.selectedFromStaffList = [];
            $scope.selectedStaffId = [];
            $("#navlinkorig").css("z-index", "2");
            const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
            $scope.filter_email_schedule_date = "";
            $scope.filter={};
        $scope.filter.type ='P';
        $rootScope.selected_filter_option = 'Default';
        $scope.filter.name = 'Default';
        $scope.filter.live_programs = [];
        $scope.filter.rank_list = [];
        $scope.mass_rank = {};
        $scope.mass_rank.update_rank = false;
        $scope.mass_rank.total_next_rank_flag = 'N';
        $scope.mass_rank.next_rank_count = $scope.mass_rank.non_next_rank_count = 0;
        $scope.mass_rank.selected_next_rank_count = 0;
        $scope.mass_rank.total_next_rank_count = 0; 
        $scope.class_scl_count = 0;
        $scope.selected_resend_invite_count = $scope.total_resend_invite_count = 0;
        $scope.resetSelectedVariables = false;
        $scope.loaderhide = {};
        $scope.loaderhide.loaderhide = true;
        
        $scope.getPOSMemberStatus = function(){
             $http({
                method: 'POST',
                url: urlservice.url + 'getPOSStatus',
                data: {
                    "company_id": $localStorage.company_id,
                    "from": "membership"
                },
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
                withCredentials: true
            }).then(function (response) {
                if (response.data.status === 'Success') {
                    $scope.pos_membership_status = response.data.msg.pos_membership_status;
                    $scope.membership_enabled = response.data.msg.membership_enabled;
            }else if (response.data.status === 'Expired') {
                    $('#progress-full').hide();
                    $scope.logout();
                } else {
                    $scope.handleFailure(response.data);
                }
            }, function (response) {
                console.log(response.data);
                $scope.handleError(response.data);
            });
        };
         
        // DATE FORMAT BASED ON DATE PICKER 
        $scope.formatDates = function (date) {
            var d = new Date(date),
                    month = '' + (d.getMonth() + 1),
                    day = '' + d.getDate(),
                    year = d.getFullYear();
            if (month.length < 2)
                month = '0' + month;
            if (day.length < 2)
                day = '0' + day;
            return [month,day,year].join('/');
        };
        $scope.selectedProgramName = '';
        $scope.selectedMembershipOptionName = '';
        $scope.is_mem_options_btn_disabled =  true;
        $scope.selectedProgramID = $scope.selectedMembershipOptionID = 0;
        $scope.selectProgram = function(id,program,type){
            if(type == 'membership'){
                $scope.selectedProgramID = 0;
                $scope.selectedProgramName = program;
                $scope.selectedProgramID = id;
                $scope.membership_category_err = false;
                var index = $scope.live_programs.findIndex(obj => obj.membership_id == id);
                $scope.membership_options = $scope.live_programs[index].options;
                if($scope.membership_options[0].category_sub_title == null){
                    $scope.is_mem_options_btn_disabled = true;
                    $scope.selectedMembershipOptionName = 'No Options';
                    $scope.selectedMembershipOptionID = 0;
                }else if($scope.membership_options[0].category_sub_title != null){
                    if($scope.membership_options.length>0)
                    {
                        for(var i=0;i<$scope.membership_options.length;i++)
                        {
                            $scope.membership_options[i].isLast = false;
                            if(i == $scope.membership_options.length-1)
                            {
                                $scope.membership_options[i].isLast = true;
                            }
                        }
                    }
                    $scope.is_mem_options_btn_disabled = false;
                    $scope.selectedMembershipOptionName = 'Membership option';
                    $scope.selectedMembershipOptionID = 0;
                }
            }else if(type == 'membership_options'){
                    $scope.selectedMembershipOptionID = 0;
                    $scope.selectedMembershipOptionID = id;
                    $scope.membership_option_err = false;
                    $scope.selectedMembershipOptionName = program;
            }
            $scope.rank_list_for_migration_temp = [];
            $scope.selected_rank_id = "";
            $scope.selected_rank_name = "";
            for(i = 0;i < $scope.rank_list_for_migration.length;i++){
                if($scope.selectedProgramID == $scope.rank_list_for_migration[i]['membership_id']){
                    $scope.rank_list_for_migration_temp.push({"rank_name" : $scope.rank_list_for_migration[i]["rank_name"],"rank_id" : $scope.rank_list_for_migration[i]["rank_id"]});
                }
            }
            for(var i=0;i<$scope.rank_list_for_migration_temp.length;i++)
            {
                $scope.rank_list_for_migration_temp[i].isLast = false;
                if(i == $scope.rank_list_for_migration_temp.length-1)
                {
                    $scope.rank_list_for_migration_temp[i].isLast = true;
                }
            }
            if($scope.rank_list_for_migration_temp.length == 0)
            {
                $scope.selected_rank_id = "";
                $scope.selected_rank_name = "";
            }
        };

        
        $scope.disableForm = true;
        $scope.checkMigrationFormTwoFields = function () {
            if ($scope.paymentAmount && $scope.paymentAmount == parseFloat(0.00)) {
                if (!$scope.selectedProgramID || !$scope.selectedMembershipOptionID || ($scope.option == 'Yes' ? !$scope.endDate : !$scope.option) || !$scope.paymentFrequency) {
                    $scope.disableForm = true;
                } else {
                    $scope.disableForm = false;
                }
            } else {
                if ($scope.selectedProgramID == 0 || $scope.selectedMembershipOptionID == 0 || ($scope.option == 'Yes' ? (!$scope.endDate || !$scope.lastPayDate) : !$scope.option) || !$scope.paymentAmount || !$scope.paymentFrequency || !$scope.paymentType || !$scope.nextPayDate || ($scope.card_last_four_digit && $scope.card_last_four_digit.length<4)) {
                    $scope.disableForm = true;
                    if (($scope.paymentFrequency != 'None' && $scope.option != 'No')) {
                        if (!$scope.lastPayDate) {
                            $scope.disableForm = true;
                        }
                    }
                } else {
                    $scope.disableForm = false;
                    if (($scope.paymentFrequency != 'None' && $scope.option != 'No')) {
                        if (!$scope.lastPayDate) {
                            $scope.disableForm = true;
                        }
                    }
                }
            }
            if ($scope.paymentFrequency == 'Custom') {
                if ($scope.customFrequencyCount && $scope.optionType) {
                    $scope.disableForm = false;
                } else {
                    $scope.disableForm = true;
                }
            }
            var cur_date = new Date();  
            if (parseFloat($scope.paymentAmount) > 0 && $scope.formatDates($('#input_nextPayDate').val()) < $scope.formatDates(cur_date.setDate(cur_date.getDate() + 5))) {
                $scope.disableForm = true;
            }
        };
        
        $scope.updatePaymentTypeClick = function (type) {
            if (type != 'migrate_mail') {
                $("#payment_type_modal").modal('hide');
            }
            if ($scope.dontShowmsgForCC || $scope.dontShowmsgForACH || $scope.dontShowmsgForManual || $scope.dontShowMigrationCheck) {
                if ($scope.dontShowmsgForCC) {
                    $scope.payment_type_click_count.CC = "1";
                }
                if ($scope.dontShowmsgForACH) {
                    $scope.payment_type_click_count.ACH = "1";
                }
                if ($scope.dontShowmsgForManual) {
                    $scope.payment_type_click_count.MANUAL = "1";
                }
                if ($scope.dontShowMigrationCheck) {
                    $scope.payment_type_click_count.MIGRATE_EMAIL = "1";
                }
                $http({
                    method: 'POST',
                    url: urlservice.url + 'updatePaymentTypeClick',
                    data: {
                        "company_id": $localStorage.company_id,
                        "user_id": $localStorage.user_id,
                        "payment_type_click_count": $scope.payment_type_click_count
                    },
                    headers: {
                        "Content-Type": "application/json; charset=utf-8",
                    },
                    withCredentials: true
                }).then(function (response) {
                    if (response.data.status === 'Success') {
                        $scope.payment_type_click_count = response.data.payment_type_click_counts;
                        $scope.doNotShowPopUps();
                        console.log($scope.payment_type_click_count);
                    } else if (response.data.status === 'Expired') {
                        $('#progress-full').hide();
                        $scope.logout();
                    } else {
                        $scope.handleFailure(response.data);
                    }

                }, function (response) {
                    console.log(response.data);
                    $scope.handleError(response.data);
                });
            } 
        };
        
        $scope.getLiveProgramNames = function (from,type_from) {
            if(type_from == ""  ){
                $('#progress-full').show();
            }
            if ($localStorage.page_from == 'frommanageID'){
                $scope.clearprogram = true;   
                $scope.selectedmemId = [];
                $scope.memOptionId = [];
                $scope.selectedmemId.push($localStorage.toCusList.membershipcategory_id);
            }
            $http({
                method: 'POST',
                url: urlservice.url + 'getLiveProgramNames',
                data: {
                    "company_id": $localStorage.company_id,
                    "from": (type_from == "migrate_members_individually" ? type_from : '' )
                },
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
                withCredentials: true
            }).then(function (response) {
                if (response.data.status === 'Success') {
                    $scope.tabletSubMenuPopup('valueset',"Participant_program");
                    $scope.live_programs = response.data.live_programs;
                    $scope.live_programs_only = [];
                    for(var i=0;i<$scope.live_programs.length;i++)
                    {
                        if($scope.live_programs[i]['category_status'] == 'P'){
                            $scope.live_programs_only.push($scope.live_programs[i]);
                        }
                        $scope.live_programs[i].isLast = false;
                        if(i == $scope.live_programs.length-1)
                        {
                            $scope.live_programs[i].isLast = true;
                        }
                    }
                    $scope.rank_list = response.data.rank_list;
                    $scope.rank_list_for_migration = response.data.rank_list_for_migration;
                    $scope.rank_list_temp = angular.copy(response.data.rank_list);
                    $scope.rank_list = angular.copy(response.data.rank_list);
                    $scope.filter.live_programs =  $scope.live_programs;
                    $scope.filter.rank_list =  $scope.rank_list;
                    $scope.filter.editedFilterOpt =  $rootScope.editedFilterOpt;
                    $scope.filter.filter_opt_count =  $rootScope.filter_opt_count;
                } else if (response.data.status === 'Expired') {
                    $('#progress-full').hide();
                    $scope.logout();
                } else {
                    $scope.handleFailure(response.data);
                }
                
            }, function (response) {
                console.log(response.data);
                $scope.handleError(response.data);
            });
        };
        $scope.setMigProcessFee =  function(type){
            $scope.mig_process_fee_type = type;
        }
           
             $scope.startimport = function(){
                  $scope.mig_screen_9 = false;
                  $scope.mig_screen_11 = false;
                  $scope.mig_screen_10 = true;
                $http({
                    method: 'POST',
                    url: urlservice.url + 'startimport',
                    data: {
                        "company_id": $localStorage.company_id,
                        "include_email_flag":$scope.include_email_flag,
                        "batch_process_id":$scope.batch_process_id,
                        "subject":$scope.emailmaincontent.subject,
                        "message":$scope.emailmaincontent.message,
                        "mig_process_fee_type":$scope.mig_process_fee_type
                    },
                    headers: {"Content-Type": 'application/json; charset=utf-8',},
                    withCredentials: true

                }).then(function (response) {
                    if (response.data.status == 'Success') { 
                       
                    } else if (response.data.status === 'Expired') {
                        $('#progress-full').hide();
                        $("#messageModal").modal('show');
                        $("#messagetitle").text('Message');
                        $("#messagecontent").text(response.data.msg);
                        $scope.logout();
                    } else { 
                        $scope.handleFailure(response.data);
                    }
                }, function (response) { 
                    console.log(response.data);
                    $scope.handleError(response.data);
                });
             }
             $scope.catchemailswitch = function(option){
                    $scope.mailType = "editMail";    
                  $scope.migration_email_switch = option;
                 if(!option){
                     $scope.updateMigrationEmail();
                 }else{  
                     $scope.emaileditable = true;
                     $scope.showeditandsend = true;
                     $scope.migrationview = true;
                     $scope.migrationDT = false;
                     $scope.processmigration = true;
                    //  $scope.mig_screen_7 = true;     
                    if($scope.dontShowMigrationCheck == false)
                    {
                        $("#migration-mail-pop").modal("show"); 
                    }    
                    else
                    {
                        $scope.openMigrateMailPop();
                    }
                }
            }
            $scope.clickUpdatBtn = function()
            {
                $("#sent-migration-mail-pop").modal("hide")
                $scope.migration_email_switch = $scope.migration_email_switch_original;
            }
             $scope.canceleditemail = function(){
                $scope.showeditandsend = false;
                $scope.emaileditable = false;
                $scope.migrationview = true;
                $scope.processmigration = false;
                $scope.migrationDT = true;
                if($localStorage.membershippagetype == 'pendingmigration'){
                    $scope.selectedprogram = 'M';
                }
                $scope.migration_email_switch = $scope.migration_email_switch_original;
                if($scope.mailType =="migrate" && $scope.dontShowMigrationCheck == false)
                {
                    $scope.goBack();
                }
                if($scope.dontShowMigrationCheck && $scope.mailType =="migrate")
                {
                    $scope.openMigratePop();
                }
             } 
             $('#mig_search').click(function(e){
                 e.stopPropagation();
                 $scope.clearSearchedUser();
             });
             
             $scope.saveEmailPop = function(){  
                if($scope.mailType =="migrate" || $scope.mailType =="emailpop")
                {
                    $("#sent-migration-mail-pop").modal("hide");
                    $('#mail_conform_pop').modal("show");
                }
                else
                {
                    $scope.updateMigrationEmail();
                }
             }
             $scope.back = function()
             {
                $("#sent-migration-mail-pop").modal("show");
                $('#mail_conform_pop').modal("hide");
             }
             $scope.closeUpdateReadyPop = function()
             {
                $('#update_ready_to_pop_modal').modal("hide");
                $scope.dtOptions
                .withOption('stateLoadParams', function (settings, data) {
                    data.search.search = "";
                });
                $scope.resetSelectedVariables = true;
                $('#DataTables_Table_0').DataTable().draw(false);
             }
             $scope.updateMigrationEmail = function(){  
                if($scope.mailType =="migrate" || $scope.mailType =="emailpop")
                {
                    $('#mail_conform_pop').modal("hide");
                    $scope.migration_email_switch = true;
                }
                $('#progress-full').show();

                $http({
                    method: 'POST',
                    url: urlservice.url + 'updateMigrationEmailSwitch',
                    data: {
                        "company_id": $localStorage.company_id,
                        "switch":($scope.migration_email_switch) ? 'Y' : 'N',
                        "subject":$scope.emailmaincontent.subject,
                        "message":$scope.emailmaincontent.message
                    },
                    headers: {"Content-Type": 'application/json; charset=utf-8',},
                    withCredentials: true

                }).then(function (response) {
                    if (response.data.status == 'Success') {  
                        $('#progress-full').hide();
                        if(response.data.migration_automated_email_flag === 'Y'){ 
                            $scope.migration_email_switch = $scope.migration_email_switch_original = true;
                         }else{
                            $scope.migration_email_switch = $scope.migration_email_switch_original = false;
                         } 
                         $scope.migration_email_switch = $scope.migration_email_switch_original;
                         if($localStorage.membershippagetype == 'pendingmigration')
                        {
                             $scope.showeditandsend = false;
                             $scope.emaileditable = false;
                             $scope.migrationview = true;
                             $scope.processmigration = false;
                             $scope.migrationDT = true;
                             $scope.selectedprogram = 'M';
                        }
                        if($scope.mailType =="migrate")
                        {
                            $('#franchise_buyer_detail_modal').modal("show"); 
                        }
                    } else if (response.data.status === 'Expired') {
                        $('#progress-full').hide();
                        $("#messageModal").modal('show');
                        $("#messagetitle").text('Message');
                        $("#messagecontent").text(response.data.msg);
                        $scope.logout();
                    } else { 
                        $scope.handleFailure(response.data);
                    }
                }, function (response) { 
                    console.log(response.data);
                    $scope.handleError(response.data);
                });
             }
             
             $scope.cancelmigration = function(){
                 $('#progress-full').show();
                $http({
                    method: 'POST',
                    url: urlservice.url + 'cancelmigration',
                    data: {
                        "company_id": $localStorage.company_id,
                        "batch_process_id":$scope.batch_process_id
                    },
                    headers: {"Content-Type": 'application/json; charset=utf-8',},
                    withCredentials: true

                }).then(function (response) {
                    if (response.data.status == 'Success') { 
                        $route.reload();
                        $('#progress-full').hide();
                    } else if (response.data.status === 'Expired') {
                        $('#progress-full').hide();
                        $("#messageModal").modal('show');
                        $("#messagetitle").text('Message');
                        $("#messagecontent").text(response.data.msg);
                        $scope.logout();
                    } else { 
                        $scope.handleFailure(response.data);
                    }
                }, function (response) { 
                    console.log(response.data);
                    $scope.handleError(response.data);
                });
             }
             
             $scope.downloadcsvreport = function () { 
                var anchor = document.createElement('a');
                anchor.setAttribute('href', $scope.csvreposturl);
                anchor.setAttribute('download', '');
                document.body.appendChild(anchor);
                anchor.click();
                anchor.parentNode.removeChild(anchor); 
            }   
             
             $scope.confirmcancelimport = function(){
                 $("#cancelimportmessageModal").modal('show');
             } 
             
             
             $scope.closeTestEMail = function()
             {
                if($scope.isCsvValidationFlag == false)
                {
                    $("#sendtesttmail-modal_mig").modal('hide'); 
                    $scope.testemail = "";
                    $("#sent-migration-mail-pop").modal('show');
                }
                else
                {
                    $("#sendtesttmail-modal_mig").modal('hide'); 
                    $scope.testemail = "";
                }
             }
             $scope.sendtestemail = function(){
                 $("#sendtesttmail-modal_mig").modal('show'); 
             }
             
             $scope.confirmsendtestemail = function(){
                 $("#sendtesttmail-modal_mig").modal('hide'); 
                 $('#progress-full').show();

                $http({
                    method: 'POST',
                    url: urlservice.url + 'confirmsendtestemail',
                    data: {
                        "company_id": $localStorage.company_id,
                        "subject":$scope.emailmaincontent.subject,
                        "message":$scope.emailmaincontent.message,
                        "to":$scope.testemail,
                    },
                    headers: {"Content-Type": 'application/json; charset=utf-8',},
                    withCredentials: true

                }).then(function (response) {
                    if (response.data.status == 'Success') { 
                        $("#cusmessageModal").modal('show');
                        $("#cusmessagetitle").text('Message');
                        $scope.closeTestEMail();
                        $("#cusmessagecontent").text(response.data.msg);
                        $('#progress-full').hide();
                    } else if (response.data.status === 'Expired') {
                        $('#progress-full').hide();
                        $("#messageModal").modal('show');
                        $("#messagetitle").text('Message');
                        $("#messagecontent").text(response.data.msg);
                        $scope.logout();
                    } else { 
                        $scope.handleFailure(response.data);
                    }
                }, function (response) { 
                    console.log(response.data);
                    $scope.handleError(response.data);
                });
             }
             
             
              $scope.getcustomtitlelist = function(from){
                    $http({
                    method: 'GET',
                    url: urlservice.url + 'getcustomtitlelist',
                    params: {
                        "company_id": $localStorage.company_id
                    },
                    headers: {"Content-Type": 'application/json; charset=utf-8',},
                    withCredentials: true

                }).then(function (response) {
                    if (response.data.status == 'Success') {
                        $scope.custom_title_list = response.data.title;
                           if(from != "program"){
                               $scope.getDatatableData();
                           }
                            
//                        }
                        if($scope.custom_title_list.length > 0)
                        {
                            for(var i=0;i<$scope.custom_title_list.length;i++)
                            {
                                var index=i+1;
                                var id = "custom_field_id_"+index;
                                var parentId ="parent_id_"+index;
                                $scope.custom_title_list[i].id= id; 
                                $scope.custom_title_list[i].parentId= parentId;
                                $scope.custom_title_list[i].parentClass= true;  
                            }
                            $('.pop-input').focus(function () {
                                $(this).parents('.input-box').addClass('focused');
                            });
            
                            $('.pop-input').blur(function () {
                                var inputValue = $(this).val();
                                if (inputValue == "") {
                                    $(this).removeClass('filled');
                                    $(this).parents('.input-box').removeClass('focused');
                                } else {
                                    $(this).addClass('filled');
                                }
                            });
                        }
                        
                    } else if (response.data.status === 'Expired') {
                        $('#progress-full').hide();
                        $scope.logout();
                    } else {
                        $scope.handleFailure(response.data);
                    }
                }, function (response) {
                    console.log(response.data);
                    $scope.handleError(response.data);
                });
           };
           
            $scope.doNotShowPopUps = function (){
            if(typeof $scope.payment_type_click_count.CC !="undefined" && $scope.payment_type_click_count.CC != null && $scope.payment_type_click_count.CC !="")
            {
                if($scope.payment_type_click_count.CC == false)
                {
                    $scope.dontShowmsgForCC = false;
                }
                else
                {
                    $scope.dontShowmsgForCC = true;
                }
            }
            if(typeof $scope.payment_type_click_count.ACH !="undefined" && $scope.payment_type_click_count.ACH != null && $scope.payment_type_click_count.ACH !="")
            {
                if($scope.payment_type_click_count.ACH == false)
                {
                    $scope.dontShowmsgForACH = false;
                }
                else
                {
                    $scope.dontShowmsgForACH = true;
                }
            }
            if(typeof $scope.payment_type_click_count.MANUAL !="undefined" && $scope.payment_type_click_count.MANUAL != null && $scope.payment_type_click_count.MANUAL !="")
            {
                if($scope.payment_type_click_count.MANUAL == false)
                {
                    $scope.dontShowmsgForManual= false;
                }
                else
                {
                    $scope.dontShowmsgForManual = true;
                }
            }
            if(typeof $scope.payment_type_click_count.MIGRATE_EMAIL !="undefined" && $scope.payment_type_click_count.MIGRATE_EMAIL != null && $scope.payment_type_click_count.MIGRATE_EMAIL !="")
            {
                if($scope.payment_type_click_count.MIGRATE_EMAIL == false)
                {
                    $scope.dontShowMigrationCheck = false;
                }
                else
                {
                    $scope.dontShowMigrationCheck = true;
                }
            }
           };
            
             $scope.getmigrationdetails = function (type) {
                if(type == 'csv') {
                    $('#progress-full').show();
                }
                $http({
                    method: 'GET',
                    url: urlservice.url + 'getmigrationdetails',
                    params: {
                        "user_id": $localStorage.user_id,
                        "company_id": $localStorage.company_id
                    },
                    headers: {"Content-Type": 'application/json; charset=utf-8',},
                    withCredentials: true

                }).then(function (response) {
                    if (response.data.status == 'Success') {
                        $scope.tabletSubMenuPopup('valueset',"Participant_pendingmigration");
                        if(response.data.pending_migration_details.migration_automated_email_flag === 'Y'){
                            $scope.migration_email_switch = $scope.migration_email_switch_original = true;
                        }else{
                            $scope.migration_email_switch = $scope.migration_email_switch_original = false;
                        }                      
                        $scope.testemail = "";
                        $scope.emaileditable = false;
                        $scope.both_running_flag = response.data.pending_migration_details.both_running_flag;
                        $scope.batch_process_id = response.data.pending_migration_details.batch_process_id;
                        $scope.emailmaincontent.message = response.data.automated_email_details.message;
                        $scope.emailmaincontent.subject = response.data.automated_email_details.subject;
                        $scope.pending_migration_details = response.data.pending_migration_details;
                        $scope.csvreposturl = $scope.pending_migration_details.download_csv_url;
                        $scope.pending_migration_flag = $scope.pending_migration_details.pending_migration_flag;
                        $scope.validation_running_flag = $scope.pending_migration_details.valdation_processing_flag;
                        $scope.import_running_flag = $scope.pending_migration_details.import_processing_flag;
                        $scope.validate_error_flag = $scope.pending_migration_details.batch_process_error;
                        $scope.validate_completed_flag = $scope.pending_migration_details.valdation_processed_flag;
                        $scope.import_completed_flag = $scope.pending_migration_details.import_processed_flag;
                        $scope.include_email_flag = $scope.pending_migration_details && $scope.pending_migration_details.migration_automated_email_flag ? $scope.pending_migration_details.migration_automated_email_flag : 'N';
                        $scope.processmigration = false;
                        if ($scope.both_running_flag == 'Y') {
                        $scope.processmigration = true;
                        $scope.migrationDT = false;
                        $scope.migrationview = false;
                        } else {
                        if ($scope.pending_migration_flag == 'N') {
                            $scope.processmigration = true;
                            $scope.migrationDT = false;
                            $scope.migrationview = false;
                        }
                        if ($scope.pending_migration_flag == 'Y') {
                            $scope.migrationDT = true;
                            $scope.processmigration = false;
                            $scope.migrationview = false;
                        }
                        if ($scope.pending_migration_flag == 'N' && $scope.validate_completed_flag == 'Y' && $scope.import_completed_flag == 'Y') {
                            $scope.migrationDT = false;
                            $scope.processmigration = false;
                            $scope.migrationview = false;
                        }
                        if(type =='csv'){

                            $scope.migrationview = true;
                        }
                    }
                    
                        if ($scope.pending_migration_details.csv_processing_flag == 'Y' || $scope.pending_migration_details.pending_migration_flag == 'Y') {
                            $localStorage.toShowmigration = $rootScope.toShowmigration = 'Y';
                        } else {
                            $localStorage.toShowmigration = $rootScope.toShowmigration = 'N';
                        }
                        
                        if(type =='csv'){
                            $('#progress-full').hide();
                        }
                        if(type=='initial' && $scope.processmigration){
                            $scope.gomigration();
                        }else if(type=='initial' && $scope.migrationDT){
                            $scope.migration();
                        }else if(type == 'initial'){
                            $localStorage.membershippagetype = '';
                            $route.reload();
                        }
                        $scope.payment_type_click_count = response.data.payment_type_click_counts;
                        $scope.doNotShowPopUps();
                    } else if (response.data.status === 'Expired') {
                        $('#progress-full').hide();
                        $("#messageModal").modal('show');
                        $("#messagetitle").text('Message');
                        $("#messagecontent").text(response.data.msg);
                        $scope.logout();
                    } else {
                        $scope.handleFailure(response.data);
                    }
                }, function (response) {
                    console.log(response.data);
                    $scope.handleError(response.data);
                });
            }; 
             $scope.getmigrationdetails_temp= function (type) {
                 if($localStorage.pendingMigration_details){
                 $scope.tabletSubMenuPopup('valueset',"Participant_pendingmigration");
                        if($localStorage.pendingMigration_details.pending_migration_details.migration_automated_email_flag === 'Y'){
                            $scope.migration_email_switch = $scope.migration_email_switch_original = true;
                        }else{
                            $scope.migration_email_switch = $scope.migration_email_switch_original = false;
                        }                      
                        $scope.testemail = "";
                        $scope.emaileditable = false;
                        $scope.both_running_flag = $localStorage.pendingMigration_details.pending_migration_details.both_running_flag;
                        $scope.batch_process_id = $localStorage.pendingMigration_details.pending_migration_details.batch_process_id;
                        $scope.emailmaincontent.message = $localStorage.pendingMigration_details.automated_email_details.message;
                        $scope.emailmaincontent.subject = $localStorage.pendingMigration_details.automated_email_details.subject;
                        $scope.pending_migration_details = $localStorage.pendingMigration_details.pending_migration_details;
                        $scope.csvreposturl = $scope.pending_migration_details.download_csv_url;
                        $scope.pending_migration_flag = $scope.pending_migration_details.pending_migration_flag;
                        $scope.validation_running_flag = $scope.pending_migration_details.valdation_processing_flag;
                        $scope.import_running_flag = $scope.pending_migration_details.import_processing_flag;
                        $scope.validate_error_flag = $scope.pending_migration_details.batch_process_error;
                        $scope.validate_completed_flag = $scope.pending_migration_details.valdation_processed_flag;
                        $scope.import_completed_flag = $scope.pending_migration_details.import_processed_flag;
                        $scope.include_email_flag = $scope.pending_migration_details && $scope.pending_migration_details.migration_automated_email_flag ? $scope.pending_migration_details.migration_automated_email_flag : 'N';
                        $scope.processmigration = false;
                        if ($scope.both_running_flag == 'Y') {
                        $scope.processmigration = true;
                        $scope.migrationDT = false;
                        $scope.migrationview = false;
                        } else {
                        if ($scope.pending_migration_flag == 'N') {
                            $scope.processmigration = true;
                            $scope.migrationDT = false;
                            $scope.migrationview = false;
                        }
                        if ($scope.pending_migration_flag == 'Y') {
                            $scope.migrationDT = true;
                            $scope.processmigration = false;
                            $scope.migrationview = false;
                        }
                        if ($scope.pending_migration_flag == 'N' && $scope.validate_completed_flag == 'Y' && $scope.import_completed_flag == 'Y') {
                            $scope.migrationDT = false;
                            $scope.processmigration = false;
                            $scope.migrationview = false;
                        }
                        if(type =='csv'){

                            $scope.migrationview = true;
                        }
                    }
                        if ($scope.pending_migration_details.csv_processing_flag == 'Y' || $scope.pending_migration_details.pending_migration_flag == 'Y') {
                            $localStorage.toShowmigration = $rootScope.toShowmigration = 'Y';
                        } else {
                            $localStorage.toShowmigration = $rootScope.toShowmigration = 'N';
                        }
                        if(type =='csv'){
                            $('#progress-full').hide();
                        }
                        if(type=='initial' && $scope.processmigration){
                            $scope.gomigration();
                        }else if(type=='initial' && $scope.migrationDT){
                            $scope.migration();
                        }else if(type == 'initial'){
                            $localStorage.membershippagetype = '';
                            $route.reload();
                        }
                        $scope.payment_type_click_count = $localStorage.pendingMigration_details.payment_type_click_counts;
                        $scope.doNotShowPopUps();
             }else{
                 $scope.getmigrationdetails(type);
             }
         };
            $scope.changeTab = function(type)
            {
                $('#progress-full').show();
                $('#DataTables_Table_0').DataTable().clear();
                $('#DataTables_Table_0').DataTable().destroy(); 
                $('#progress-full').show();
                if(type == "P")
                {
                    $scope.activeMigrationTab = 'P';
                }
                if(type == "N")
                {
                    $scope.activeMigrationTab = 'E';
                }
                if(type == "R")
                {
                    $scope.activeMigrationTab = 'R';
                }
                if(type == "N" || type == "R"){
                    $scope.getLiveProgramNames('','migrate_members_individually');
                }

                if(($scope.activeMigrationTab == 'E' && $scope.showpaymenttoken) || ($scope.activeMigrationTab == 'R' && $scope.showpaymenttoken)) {
                    $('.pagination_selected').css('top','116px');
                } else if (($scope.activeMigrationTab == 'E') || ($scope.activeMigrationTab == 'R')) {
                    $('.pagination_selected').css('top','103px');
                } else if ($scope.activeMigrationTab == 'P'&& $scope.showpaymenttoken) {
                    $('.pagination_selected').css('top','160px');
                } else {
                    $('.pagination_selected').css('top','150px');
                }
                
                $scope.showMigrateTable =false;
                $scope.showTable = false;
                $scope.showTable = true;
                $scope.setDataTableStateLoadParams('migration');
            }
            $scope.todayDate = function () {
                var today = new Date();
                var dd = today.getDate();
                var mm = today.toLocaleString('default', {month: 'long'});//January is 0!
                var yyyy = today.getFullYear();
                if (dd < 10) {
                    dd = '0' + dd;
                }
                today = mm + ' ' + dd + ',' + yyyy;
                return today;
            };
    
        $scope.programfilter = function () {
            $rootScope.filter_details = $rootScope.selected_filter_details;
            $rootScope.filter_options = angular.copy($rootScope.selected_filter_details.filter_option);
            if ($rootScope.filter_opt_count > 0) {
                $rootScope.filter_options = angular.copy($rootScope.editedFilterOpt);
            }
            $scope.call_hidecol = true;
//            $scope.getcustomers_list('fromProgram');
            setTimeout(function () {
                if(!$scope.loaderhide.loaderhide){
                    $scope.resetDataTableVariables();
                    $scope.search_value = $scope.searchTerm = '';
                }
                $scope.dtOptions.ajax.data.filter_id = $rootScope.filter_details.filter_id;
                $scope.dtOptions.ajax.data.filter_options = JSON.stringify($rootScope.filter_options);
                $scope.dtOptions.ajax.data.from = '';
                $scope.dtOptions.ajax.data.tab = '';

                 if(!$scope.$$phase) {
                    $scope.$apply();
               }
            },1);
                                
            console.log($scope.loaderhide.loaderhide , "$scope.$parent.loaderhide = false;");
//            $scope.loaderhide.loaderhide = false;
//            $scope.resetDataTableVariables();
//             $('#'+$rootScope.curr_datatable).DataTable().ajax.reload();
//            $scope.dtOptions
//            .withOption('stateLoadParams', function (settings, data) {
//                    data.search.search = "";
//                    data.start = 0;
//                    data.page = 0;
//                    data.iScroller = 0;
//                    data.iScrollerTopRow = 0;
//            });
        };
        
        $scope.deleteMembershipRegistration = function(){
            $("#confirm-delete-modal").modal('show');
            $("#confirmdeletemodal").text('Are you sure you would like to delete the selected member(s)?');
        };
        $scope.confirmDeleteRegistration = function(){
            $("#confirm-delete-modal").modal('hide');
            $("#confirm-delete-modal1").modal('show');
            $("#confirmdeletemodal1").text('This action can not be undone.');
        };

        $scope.formatDateToday = function(date){
            if(date != ''){
                var d = new Date(date),
                            month = '' + (d.getMonth() + 1),
                            day = '' + d.getDate(),
                            year = d.getFullYear();
            }else{
                var d = new Date,
                            month = '' + (d.getMonth() + 1),
                            day = '' + d.getDate(),
                            year = d.getFullYear();
            }

                if (month.length < 2)
                    month = '0' + month;
                if (day.length < 2)
                    day = '0' + day;

            return [year, month, day].join('-');
        };

        $scope.checkFutureClassReg = function () { 
            var curr_date = new Date();
            var selected_mem_reg_id = '';
            delete_date = $scope.formatDateToday(curr_date);
            if ($scope.selectAll == true && $scope.total_receipients == 1) {
                selected_mem_reg_id = $scope.membershiplistcontents[0].id;
            } else if ($rootScope.email_unselected_ids.length == 0 && $scope.selectedData.length == 1){
                selected_mem_reg_id = $rootScope.email_selected_ids[0].id;
            }
            $('#progress-full').show();
            $http({
                method: 'POST',
                url: urlservice.url + 'checkFutureClassReg',
                data: {
                    "company_id": $localStorage.company_id,
                    "reg_id": selected_mem_reg_id,
                    "reg_type": 'M',
                    "hold_date": delete_date,
                    "resume_date": "",
                    "unselected_ids" : ($rootScope.email_unselected_ids.length > 0 && (($scope.total_receipients - $rootScope.email_unselected_ids.length) == 1)) ? $rootScope.email_unselected_ids : [],
                    "type" : 'delete',
                    "all_select_flag": $scope.all_select_flag,
                    "search": $scope.searchTerm,
                    "filter_category": 'P', //P- program
                    "filter_type": 'AP', //All Participant
                    "filter_options": JSON.stringify($rootScope.filter_options),
                    "mobile_view" : 'N'

                },
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
                withCredentials: true
            }).then(function (response) {
                if (response.data.status === 'Success') {
                    $scope.class_scl_count = response.data.msg.future_reg_count;
                    if ($scope.class_scl_count > 0) {
                        $('#progress-full').hide();
                        $("#confirm-delete-modal").modal('hide');
                        $("#confirm-delete-modal1").modal('hide');
                        $("#confirm-delete-modal2").modal('show');
                        $("#confirmdeletemodal2").text('Deleting will remove all future class/appointment registrations for this participant that are connected to the current program.');
                    } else {
                        $scope.proceedDeleteRegistration(response.data.reg_ids);
                    }
                } else if (response.data.status === 'Expired') {
                    console.log(response.data);
                    $('#progress-full').hide();
                    $("#messageModal").modal('show');
                    $("#messagetitle").text('Message');
                    $("#messagecontent").text(response.data.msg);
                    $scope.logout();
                } else if (response.data.status === 'Version') {
                    $('#progress-full').hide();
                    $scope.handleFailure(response.data);
                } else {
                    $('#progress-full').hide();
                    if($localStorage.readonlyuser == "Y"){
                        $scope.handleFailure(response.data);
                    }
                    $("#successmessageModal").modal('show');
                    $("#successmessagetitle").text('Message');
                    $("#successmessagecontent").text(response.data.msg);
                }
            }, function (response) {
                console.log(response.data);
                $scope.handleError(response.data);
            });
        }

        $scope.proceedDeleteRegistration = function(reg_id){
            if ($scope.selectAll == true && $scope.membershiplistcontents.length == 1) {
                var selected_mem_reg_id = $scope.membershiplistcontents[0].id;
            } else if($rootScope.email_unselected_ids.length == 0 && $scope.selectedData.length == 1) {
                var selected_mem_reg_id = $rootScope.email_selected_ids[0].id;
            } else {
                var selected_mem_reg_id = reg_id;
            }
            $('#progress-full').show();
            $http({
                method: 'POST',
                url: urlservice.url + 'deleteMembRegistration',
                data: {
                    "company_id": $localStorage.company_id,
                    "membership_reg_id": selected_mem_reg_id,
                    "class_scl_flag":$scope.class_scl_count > 0 ? 'Y' : 'N',
                    "user_id": $localStorage.user_id
                },
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
                withCredentials: true
            }).then(function (response) {
                if (response.data.status == 'Success') {
                    $('#progress-full').hide();

                    
                    $scope.err_flg = response.data.err_flg;
                    $scope.pay_flag = response.data.pay_flag; // S, N, F, NFS, NS, FS,FN
                    
                    if(response.data.err_flg == 'N'){
                        $scope.show_del_flag = 'N';
                        $scope.getcustomers_list('',"delete");
                        $scope.dtOptions.withOption('stateLoadParams', function (settings, data) {
                            data.start = 0;
                            data.iScroller = 0;
                            data.iScrollerTopRow = 0;
                        });
                        $("#deleteMembRegistration").modal('show');
                        $("#deleteMembRegistrationContentSuccess").text(response.data.msg);
                        
                    }else{
                        if($scope.pay_flag != 'S' && $scope.pay_flag != 'N' && $scope.pay_flag != 'F' && $scope.pay_flag != 'D'){
                            $("#deleteMembRegistration-v2").modal('show');
                            $("#deleteMembRegistrationContentFail-v2").text(response.data.msg);
                            $("#deleteMembRegistrationContentFail-v2-nfs").text(response.data.msg);
                        }else{
                            $("#deleteMembRegistration").modal('show');
                            if($scope.pay_flag == 'D'){
                                $("#deleteMembRegistrationContentFail_D").text(response.data.msg);
                            }else{
                                $("#deleteMembRegistrationContentFail").text(response.data.msg);
                            }
                        }
                    }
                } else if (response.data.status === 'Expired') {
                        console.log(response.data);
                        $('#progress-full').hide();
                        $("#messageModal").modal('show');
                        $("#messagetitle").text('Message');
                        $("#messagecontent").text(response.data.msg);
                        $scope.logout();
                } else if (response.data.status === 'Version') {
                    $('#progress-full').hide();
                    $scope.handleFailure(response.data);
                } else {
                    $('#progress-full').hide();
                    if($localStorage.readonlyuser == "Y"){
                        $scope.handleFailure(response.data);
                    }
                    $("#successmessageModal").modal('show');
                    $("#successmessagetitle").text('Message');
                    $("#successmessagecontent").text(response.data.msg);
                }
            }, function (response) {
                console.log(response.data);
                $scope.handleError(response.data);
            });
        };
            
        $scope.cancelDeleteRegistration = function(){
        
         $("#confirm-delete-modal").modal('hide');

        };
        
        $scope.$on('save_filter_change', function (event, mass) {
            $scope.new_save_filter_option = mass.new_json;
            $scope.saved_filter_name = '';
            $scope.enable_email_report = false;
            $scope.send_mail_limit = 1;
            $scope.send_mail_option = 'week(s)';
            if ($scope.send_mail_option == 'week(s)') {
                $scope.send_mail_days_option = 'Monday';
            } else {
                $scope.send_mail_days_option = 'day 1';
            }
            $scope.selectedStaffId = [], $scope.staffIds = [];
            for (i = 0; i < $scope.staff_list.length; i++) {
                $scope.staff_list[i]['checked'] = true;
                if (!$scope.selectedStaffId.includes($scope.staff_list[i].user_id)) {
                    $scope.selectedStaffId.push($scope.staff_list[i].user_id);
                }
            }
            if ($scope.staff_list.length == $scope.selectedStaffId.length) {
                $("#all_staff").prop('checked', true);
                $scope.all_staff = true;
            }
            $scope.staffIds = angular.copy($scope.selectedStaffId);
            $scope.staffOptionName = ($scope.staff_list.length == $scope.selectedStaffId.length)? 'All staff (' + $scope.selectedStaffId.length + ')':'Staff ('+ $scope.selectedStaffId.length+')';
            $scope.filter_email_forms = false;
            $scope.save_update_type = 'S';
            setTimeout(function () {
                $scope.savedFilterPopup();
            }, 50);
        });
        $scope.$on('ok_filter_change', function (event, mass) {
            $scope.editedFilterOpt = angular.copy(mass.filter_opt_list);
            $scope.selected_filter_options = angular.copy(mass.filter_opt_list);// here selected_filter_options variable is used to stored edited filter options before click on filter button
            $scope.filter_opt_count =  mass.filter_opt_count;
            if ($scope.filter_opt_count > 0) {
                $scope.filterOkCount = true;
            } else {
                $scope.filterOkCount = false;
            }
            $scope.btn_disable_count = $scope.deepEqual($scope.filter_options, mass.filter_opt_list);
            if($scope.btn_disable_count == 0){  // for filter options are same then not trigger the customers call
                console.log("Filter options are same");
            }else{
                $scope.programfilter();
            }
            $scope.clearprogram = true;
        });

       $scope.filter_delete = function(list){
            $scope.filter_details = list;
            if(list.sent_mail_flag == 'Y'){
                $scope.filter_delete_content = "This filter has an email report<br> set up. Deleting this filter will<br> also stop the report from being<br> sent.<br><br>Are you sure you would like to<br> delete this saved filter?"
            }else{
                 $scope.filter_delete_content = "Are you sure you would like to<br> delete this saved filter?";
            }
            $("#deletesavedfilterModal").modal('show');
        }
        
        $scope.deleteFilterDetails = function(){
                $('#progress-full').show();
            $http({
                method: 'POST',
                url: urlservice.url + 'deleteFilterDetails',
                data: {
                    "company_id": $localStorage.company_id,
                    "filter_id":$scope.filter_details.filter_id,
                },
                headers: {"Content-Type": 'application/json; charset=utf-8', },
                withCredentials: true

            }).then(function (response) {
                if (response.data.status == 'Success') {
                    $('#progress-full').hide();
                    $("#errorMsgModal").modal('show');
                    $('#errorMsgContent').text(response.data.msg);
                    $scope.get_filter_list('delete_filter');
                } else if (response.data.status === 'Version') {
                    $('#progress-full').hide();
                    $scope.handleFailure(response.data);
                } else {
                    $('#progress-full').hide();
                    console.log(response.data);
                }
            }, function (response) {
                console.log(response.data);
                $scope.handleError(response.data);
            });
        };
        
        $scope.showemailreportflag = function (flag) {
            if (flag) {
                $scope.email_report_flag = true;
            }
            $scope.filter_email_forms = true;
        };
        $scope.catchsendmailopt = function (type, opt_type) {
            if (type == 'mail_opt') {
                $scope.send_mail_limit = 1;
                if (opt_type == 'W') {
                    $scope.send_mail_option = 'week(s)';
                    $scope.send_mail_days_option = 'Monday';
                } else if (opt_type == 'M') {
                    $scope.send_mail_option = 'month(s)';
                     $scope.send_mail_days_option = 'day 1';
                }
            } else if (type == 'mail_days') {
                $scope.send_mail_days_option = opt_type;
            }
            $scope.filter_email_forms = true;
        }
        $scope.deepEqual = function (object1, object2) {  //compare two objects
        console.log("object1, object2",object1, object2);
        var sub_count = 0, count = 0;
        var keys1 = Object.keys(object1);
        var keys2 = Object.keys(object2);
        if (keys1.length !== keys2.length) {
            return false;
        }
        for (const key of keys1) {
            const val1 = object1[key];
            const val2 = object2[key];
            for (let i in val1) {
                if (JSON.stringify(val1[i]) != JSON.stringify(val2[i])) {
                    sub_count++;
                }
            }
            if (sub_count > 0) {
                count++;
                sub_count = 0;
            }
        }
        return count;
    };
        $scope.getstaffpopup = function(){
            // reset the variables when ever opens the staff modal
            $scope.all_staff = false; 
            for (let i in $scope.staff_list) {
                $scope.staff_list[i]['checked'] = false;
                for (let j in $scope.selectedStaffId) {
                    if ($scope.staff_list[i].user_id == $scope.selectedStaffId[j]) {
                        $scope.staff_list[i]['checked'] = false;
                    }
                }
            }
            $("#save_filter_modal").modal('hide');
            $("#staff_child_box").modal('show');
            if ($scope.staff_list.length == $scope.selectedStaffId.length) {
                $("#all_staff").prop('checked', true);
                for (let i in $scope.staff_list) {
                    $scope.staff_list[i]['checked'] = true;
                    $scope.all_staff = true;
                }
            } else {
                $("#all_staff").prop('checked', false);
                $scope.all_staff = false
                for (let i in $scope.staff_list) {
                    $scope.staff_list[i]['checked'] = false;
                    for (let j in $scope.selectedStaffId) {
                        if ($scope.staff_list[i].user_id == $scope.selectedStaffId[j]) {
                            $scope.staff_list[i]['checked'] = true;
                        }
                    }
                }
            }
        }
        $scope.checked_staff_filter = function (id, check) {
            $scope.filter_email_forms = true;
            $scope.staffOptionName = '';
            if (id === 'allstaff') {
                if ($("#all_staff").prop('checked') == true) {
                    $scope.all_staff = true;
                    for (i = 0; i < $scope.staff_list.length; i++) {
                        $scope.staff_list[i]['checked'] = true;
                        if (!$scope.selectedStaffId.includes($scope.staff_list[i].user_id)) {
                            $scope.selectedStaffId.push($scope.staff_list[i].user_id);
                        }
                    }
                } else {
                    $scope.all_staff = false;
                    for (i = 0; i < $scope.staff_list.length; i++) {
                        $scope.staff_list[i]['checked'] = false;
                        $scope.selectedStaffId = [];
                    }
                }
            } else {
                $("#all_staff").prop('checked', false);
                $scope.all_staff = false;
                if (!check) {
                    for (var i = $scope.selectedStaffId.length - 1; i >= 0; i--) {
                        if ($scope.selectedStaffId[i] == id) {
                            var index = $scope.getindexbyvalue(id);
                            $scope.staff_list[index]['checked'] = false;
                            $scope.selectedStaffId.splice(i, 1);
                        }
                    }
                } else {
                    for (var i = 0; i < $scope.staff_list.length; i++) {
                        if (id == $scope.staff_list[i].user_id) {
                            $scope.staff_list[i]['checked'] = true;
                            if (!$scope.selectedStaffId.includes($scope.staff_list[i].user_id)) {
                                $scope.selectedStaffId.push($scope.staff_list[i].user_id);
                            }
                        }
                    }
                }
                if ($scope.staff_list.length == $scope.selectedStaffId.length) {
                    $("#all_staff").prop('checked', true);
                    $scope.all_staff = true;
                }
            }
            event.stopPropagation();
        };
        $scope.getindexbyvalue = function (id) {
           var index = $scope.staff_list.findIndex(object => {
                    return object.user_id === id;
                });
                return index;
        }
        $scope.savedFilterPopup = function(){
            $scope.staffIds = [];
            if ($scope.selectedStaffId.length == 0) {
                $("#all_staff").prop('checked', true);
                $scope.all_staff = true;
                for (i = 0; i < $scope.staff_list.length; i++) {
                    $scope.staff_list[i]['checked'] = true;
                    if (!$scope.selectedStaffId.includes($scope.staff_list[i].user_id)) {
                        $scope.selectedStaffId.push($scope.staff_list[i].user_id);
                    }
                }
            }
            $scope.staffOptionName = ($scope.staff_list.length == $scope.selectedStaffId.length)? 'All staff (' + $scope.selectedStaffId.length + ')':'Staff ('+ $scope.selectedStaffId.length+')';
            $scope.staffIds = angular.copy($scope.selectedStaffId);
            $("#save_filter_modal").modal('show');
        }
        $scope.cancelStaffPopup = function () {
            $scope.selectedStaffId = angular.copy($scope.staffIds);
            if ($scope.staff_list.length == $scope.selectedStaffId.length) {
                $("#all_staff").prop('checked', true);
                for (let i in $scope.staff_list) {
                    $scope.staff_list[i]['checked'] = true;
                    $scope.all_staff = true;
                }
            } else {
                $("#all_staff").prop('checked', false);
                $scope.all_staff = false
                for (let i in $scope.staff_list) {
                    $scope.staff_list[i]['checked'] = false;
                    for (let j in $scope.selectedStaffId) {
                        if ($scope.staff_list[i].user_id == $scope.selectedStaffId[j]) {
                            $scope.staff_list[i]['checked'] = true;
                        }
                    }
                }
            }
            $scope.staffOptionName = ($scope.staff_list.length == $scope.selectedStaffId.length)? 'All staff (' + $scope.selectedStaffId.length + ')':'Staff ('+ $scope.selectedStaffId.length+')';
            $("#save_filter_modal").modal('show');
        }
        
        $scope.calculateEmailReportDate = function(){
            var index = $scope.send_mail_option == 'week(s)' ? $scope.send_mail_week_list.indexOf($scope.send_mail_days_option) : $scope.send_mail_month_list.indexOf($scope.send_mail_days_option);
            var d = new Date();
            var da = new Date();
            var filter_email_schedule_date = "";
            if ($scope.send_mail_option == 'week(s)') {
                da.setDate(d.getDate() + ((7 - d.getDay()) % 7 + (index + 1)) % 7);
                if ((index + 1) === d.getDay()) {
                    da.setDate(da.getDate() + (1 * 7));
                }
                filter_email_schedule_date = da;
            } else if ($scope.send_mail_option == 'month(s)') {
                var month = month_day = 0;
                if((index + 1) <=  d.getDate()){
                    if(new Date(d.getFullYear(),d.getMonth()+2,0).getDate() < (index + 1)){
                        month = d.getMonth() + 2;
                        month_day = 0;
                    }else{
                        month = d.getMonth() + 1;
                        month_day = index + 1;
                    }
                }else{
                    if((index + 1) <= new Date(d.getFullYear(),d.getMonth()+1,0).getDate()){
                        month = d.getMonth();
                        month_day = index + 1;
                    }else{
                        if(new Date(d.getFullYear(),d.getMonth()+2,0).getDate() < (index + 1)){
                            month = d.getMonth() + 2;
                            month_day = 0;
                        }else{
                            month = d.getMonth() + 1;
                            month_day = index + 1;
                        }
                    }
                }
                filter_email_schedule_date = new Date(d.getFullYear(), month, month_day);
            }
            $scope.filter_email_schedule_date =  $scope.formatDates(filter_email_schedule_date);
            var day_value = filter_email_schedule_date.getDay();
            var date_val = filter_email_schedule_date;
            var day = weekday[day_value];
            var date = date_val.getDate();
            var month_format = date_val.toLocaleString('default', { month: 'long' });//January is 0!
            var year = date_val.getFullYear();
            if (date < 10) {
                date = '0' + date;
            }
            email_report_date_format = day + ', ' + month_format + ' ' + date + ', ' +year ;
            var mail_options = ($scope.send_mail_option == 'week(s)')? 'week(s)':'month(s)';
            $("#filterReportMsgModal").modal('show');
            $('#filterReportMsg').text("The next report will send on "+ email_report_date_format +". Then every " + $scope.send_mail_limit + " " + mail_options +" from that date.");
        };
        
        $scope.saveupdatefiltermailreportdet = function(type){
            var index = $scope.send_mail_option == 'week(s)' ? $scope.send_mail_week_list.indexOf($scope.send_mail_days_option) : $scope.send_mail_month_list.indexOf($scope.send_mail_days_option);
            if(!$scope.enable_email_report){
                $scope.send_mail_limit = 1;
                $scope.send_mail_option = 'week(s)';
                index = 0;
                $scope.selectedStaffId = [];
                $scope.filter_email_schedule_date = "";
            }
            if (type == 'U') {
                $('#progress-full').show();
                $http({
                    method: 'POST',
                    url: urlservice.url + 'updateFilterMailReportDetails',
                    data: {
                        "company_id": $localStorage.company_id,
                        "filter_category": 'P', //P- program
                        "filter_id": $scope.filter_id,
                        "filter_name": $scope.saved_filter_name,
                        "sent_mail_flag": $scope.enable_email_report ? 'Y' : 'N',
                        "send_mail_option": $scope.send_mail_option == 'week(s)' ? 'W' : 'M',
                        "mail_option_limit": $scope.send_mail_limit,
                        "send_mail_days_option": index + 1,
                        "user_id_list": $scope.selectedStaffId,
                        "filter_email_schedule_date":$scope.filter_email_schedule_date
                    },
                    headers: {"Content-Type": 'application/json; charset=utf-8', },
                    withCredentials: true

                }).then(function (response) {
                    if (response.data.status === 'Success') {
                        $('#progress-full').hide();
                        $("#errorMsgModal").modal('show');
                        $('#errorMsgContent').text(response.data.msg);
                        $scope.get_filter_list('saved_filters');
                    } else if (response.data.status === 'Version') {
                        $('#progress-full').hide();
                        $scope.handleFailure(response.data);
                    } else {
                        $('#progress-full').hide();
                        console.log(response.data);
                    }
                }, function (response) {
                    console.log(response.data);
                    $scope.handleError(response.data);
                });
            }else if(type == 'S'){
                $('#progress-full').show();
                $http({
                    method: 'POST',
                    url: urlservice.url + 'saveFilterDetails',
                    data: {
                        "company_id": $localStorage.company_id,
                        "filter_category": 'P', //P- program
                        "filter_type":'AP', //All Participant
                        "filter_name": $scope.saved_filter_name,
                        "custom_option": 'S', 
                        "filter_option":$scope.new_save_filter_option,
                        "sent_mail_flag": $scope.enable_email_report ? 'Y' : 'N',
                        "send_mail_option": $scope.send_mail_option == 'week(s)' ? 'W' : 'M',
                        "mail_option_limit": $scope.send_mail_limit,
                        "send_mail_days_option": index + 1,
                        "user_id_list": $scope.selectedStaffId,
                        "filter_email_schedule_date":$scope.filter_email_schedule_date
                    },
                    headers: {"Content-Type": 'application/json; charset=utf-8', },
                    withCredentials: true

                }).then(function (response) {
                    if (response.data.status === 'Success') {
                        $('#progress-full').hide();
                        if (response.data.upgrade_plan == 'Y') {
                            $("#PlanLimitErrorMsgModal").modal('show');
                            $('#PlanLimitErrorMsgContent').text(response.data.msg);
                        } else {
                            $("#errorMsgModal").modal('show');
                            $('#errorMsgContent').text(response.data.msg);
                            $scope.get_filter_list('saved_filters');
                        }
                    }else if (response.data.status === 'Version') {
                        $('#progress-full').hide();
                        $scope.handleFailure(response.data);
                    } else {
                        $('#progress-full').hide();
                        console.log(response.data);
                    }
                }, function (response) {
                    console.log(response.data);
                    $scope.handleError(response.data);
                });
            }
        }
        $scope.comparePlansSection = function () {
            $("#PlanLimitErrorMsgModal").modal('hide');
            $(".modal-backdrop").css("display", "none");
            $localStorage.viewselectplanpage = true;
            $localStorage.pageFromMobile = '';
            $rootScope.myaccountsubtab = 'compareplan';
            $location.path('/billingstripe');
        }
        
        $scope.myInterval=function(){
            $scope.Interval = clearInterval($scope.Interval);
            $scope.ClearInter = 1;
            $('#'+$rootScope.curr_datatable).DataTable().ajax.reload(); 
        };
             
        $scope.SearchWaitRequest=function(){
            if ((document.querySelector('.dataTables_filter input').value) && $scope.ClearInter<=0 && ($scope.preload_previous_search!=document.querySelector('.dataTables_filter input').value)){
                if (typeof $scope.Interval === 'undefined'){
                    $scope.Interval = setInterval($scope.myInterval, 750);
                    return false;
                }else{
                    $scope.Interval = clearInterval($scope.Interval);
                    $scope.Interval = setInterval($scope.myInterval, 750);
                    return false;
                }
            }else if ((typeof $scope.Interval != 'undefined') && $scope.ClearInter<=0){
                    return false;
            }    
            return true;
        };
        
        $scope.getcustomers_list = function (tab, tab1) {
            $scope.membership_daystype = tab1;
             if ($localStorage.page_from == 'frommanageID') {
                $scope.current_tab = [];
                $scope.current_tab.push('R');
            }
            $rootScope.curr_datatable = 'DataTables_Table_0'; 
            if(tab == 'migration'){
                $scope.current_tab = 'M';
                 $('#DataTables_Table_0').DataTable()
                            .rows().invalidate('data')
                            .draw(false);
                    var titleHtml = '<input type="checkbox" ng-model="selectAll" ng-change="toggleAll(selectAll, selected)">';
                var phone ='<span class="card-icon eventactionlinks"><i class="fa fa-mobile-phone fa-3x green"></i></span>'; 
                $scope.change_made = $scope.search_value = '';
                $scope.selected = {};
                $scope.selectAll = false;
                $scope.selectedData = [];
                $scope.all_select_flag = $rootScope.all_select_flag_email = "N";
                $rootScope.email_unselected_ids = [];
                $scope.email_unselected_list = false;
                $scope.selectAll = false;
                $rootScope.email_selected_ids = [];
                   $scope.dtOptions = DTOptionsBuilder.newOptions()
                        .withOption('ajax', {
                            url: urlservice.url + 'Customers',
                            xhrFields: {
                                withCredentials: true
                             },
                            dataSrc: function (json) {
                                if($scope.resetSelectedVariables){
                                    $scope.selectCount = 0;
                                    $scope.selectedData =[];
                                    $scope.selected =[];
                                    $scope.resetSelectedVariables = false;
                                }
                                $scope.membershiplistcontents = json.data;
                                $scope.liveviewcount = json.live_count;
                                $scope.draftviewcount = json.draft_count;
                                $scope.showpaymenttoken = json.payment_token;
                                $scope.total_program_records = json.recordsTotal;
                                $scope.pendingMigrationCount = json.pending_migration_count;
                                $scope.readyToMigrateCount = json.ready_migration_count;
                                $scope.clarificationCount = json.need_clarification_count;
                                $rootScope.total_receipients = $scope.total_receipients = json.recordsFiltered;
                                $scope.mapped_cc_id = json.c_id;
                                if(json.migration_automated_email_flag === 'Y'){
                                    $scope.migration_email_switch = true;
                                    $scope.include_email_flag = 'Y';
                                }else{
                                    $scope.migration_email_switch = $scope.migration_email_switch_original;
                                    $scope.include_email_flag = 'N';
                                }
                                $scope.showTable = true;
                                $('#DataTables_Table_0_wrapper').removeClass('program_table');
                                $('#DataTables_Table_0_wrapper').addClass('migration_table');
                                    document.querySelector('#DataTables_Table_0_filter.dataTables_filter').style = "top: -45px !important";
                                    if($rootScope.total_receipients <= 0){
                                        $scope.resetDataTableVariables();
                                    }
                                if(json.recordsTotal == 0){
                                    $scope.selectAll = false;
                                    document.querySelector('#DataTables_Table_0_filter.dataTables_filter');
                                }
                                return json.data;
                            },
                            type: 'POST',
                            dataType: 'json',
                            data: {
                                "company_id": $localStorage.company_id,
                                "membership_status": $scope.current_tab,
                                "membership_migration_status": $scope.activeMigrationTab
                            },
                            error: function (xhr, error, thrown) {
                                if (xhr.responseJSON.status === "Failed") {
                                    $('#progress-full').hide();
                                    $("#pushmessageModal").modal('show');
                                    $("#pushmessagetitle").text('Message');
                                    $("#pushmessagecontent").text(xhr.responseJSON.msg);
                                }else if(xhr.responseJSON.status === 'Expired'){
                                    $('#progress-full').hide();
                                    $("#messageModal").modal('show');
                                    $("#messagetitle").text('Message');
                                    $("#messagecontent").text(xhr.responseJSON.msg);
                                    $scope.logout();  
                                }else if (xhr.responseJSON.status === 'Version') {
                                    $('#progress-full').hide();
                                    $scope.handleFailure(xhr.responseJSON.msg);
                                }else{
                                    $('#progress-full').hide();
                                }
                            }
                           
                        })

                        .withOption('createdRow', function (row, data, dataIndex) {
                            // Recompiling so we can bind Angular directive to the DT
                            $compile(angular.element(row).contents())($scope);
                        })
                        .withOption('headerCallback', function (header) {
                            // Use this headerCompiled field to only compile header once
                            $scope.headerCompiled = true;
                            $compile(angular.element(header).contents())($scope);
                        })
                        .withOption('fnPreDrawCallback', function () {
                            $scope.paginationDetailsSetInPreDraw();
                            var SearchWaitStatus = $scope.SearchWaitRequest();
                            if(!SearchWaitStatus){
                                return false;
                            } 
                            $scope.ClearInter = 0;
                            $scope.preload_previous_search = document.querySelector('.dataTables_filter input').value;
                            $('#progress-full').show();
                        })
                        .withOption('fnDrawCallback', function () {
                            $('#progress-full').hide();
                            $scope.paginationDetailsSetInPostDraw();
                        })
                        .withOption('serverSide', true)
                        $scope.dtOptions = $scope.setDatatableCommonOption($scope.dtOptions,'program');
                
                        $scope.dtColumns = [
                        DTColumnBuilder.newColumn(null).withTitle(titleHtml).notSortable()
                                .renderWith(function (data, type, full, meta) {
                                    var index =  $scope.membershiplistcontents.findIndex(obj => obj.id ==  data.id);
                                    if(index >= 0){
                                    if($scope.selectAll==true  || $scope.email_unselected_list){
                                            $scope.selected[full.id] = true;
                                        // Maintain unselect
                                        for (var id in  $scope.selected) {
                                            if ($rootScope.email_unselected_ids.length > 0) {
                                                for (var x = 0; x < $rootScope.email_unselected_ids.length; x++) {
                                                    if (id === $rootScope.email_unselected_ids[x].id) {
                                                        $scope.selected[id] = false;
                                                    }
                                                }
                                            }
                                        }
                                    }else {
                                        $scope.selected[full.id] = false;
                                        for (var id in  $scope.selected) {
                                            if ($scope.selectedData.length > 0) {
                                                for (var x = 0; x < $scope.selectedData.length; x++) {
                                                    if (id === $scope.selectedData[x].id) {
                                                        $scope.selected[id] = true;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    // Clear selected items when search apply
                                    $rootScope.email_selected_ids = $scope.selectedData;
                                    if($scope.searchTerm){
                                        if((!$scope.searchClearData) || ($scope.searchClearData != $scope.searchTerm)){
                                            $scope.searchClearData = $scope.searchTerm;
                                            $scope.selectedData = [];
                                            $scope.all_select_flag = 'N';
                                            $rootScope.all_select_flag_email = 'N';
                                            $rootScope.email_unselected_ids = [];
                                            $scope.email_unselected_list = false;
                                            $scope.selectAll = false;
                                            $rootScope.email_selected_ids = [];
                                            $scope.selected[full.id] = false;
                                            for (var id in  $scope.selected) {
                                                if ($scope.selectedData.length > 0) {
                                                    for (var x = 0; x < $scope.selectedData.length; x++) {
                                                        if (id === $scope.selectedData[x].id) {
                                                            $scope.selected[id] = false;
                                                        }
                                                    }
                                                }
                                            }
                                         }
                                    }else if($scope.searchClearData && !$scope.searchTerm){
                                            $scope.searchClearData = ''; 
                                           $scope.selectedData = [];
                                            $scope.all_select_flag = 'N';
                                            $rootScope.all_select_flag_email = 'N';
                                            $rootScope.email_unselected_ids = [];
                                            $scope.email_unselected_list = false;
                                            $scope.selectAll = false;
                                            $rootScope.email_selected_ids = [];
                                            $scope.selected[full.id] = false;
                                            for (var id in  $scope.selected) {
                                                if ($scope.selectedData.length > 0) {
                                                    for (var x = 0; x < $scope.selectedData.length; x++) {
                                                        if (id === $scope.selectedData[x].id) {
                                                            $scope.selected[id] = false;
                                                        }
                                                    }
                                                }
                                            }
                                    }else{
                                        $scope.searchClearData = '';
                                    }
                                    return '<input type="checkbox" ng-model="selected[' + data.id + ']" ng-change="toggleOne(selected)"/>';
                                }else{
                                    return '';
                                } 
                                }),
                        DTColumnBuilder.newColumn('p_na').withTitle('<span>Participant</span>').withClass('col2').renderWith(
                                function (data, type, full) {
                                    if($scope.activeMigrationTab == "E")
                                    {
                                        if(full.attendance_limit_count_err != "" || full.attendance_limit_frequency_err != "" || full.buyer_address_err != "" || full.buyer_city_err != ""
                                        || full.buyer_country_err != "" || full.buyer_email_err != "" || full.buyer_fname_err != "" || full.buyer_lname_err != "" || full.buyer_phone_err != "" 
                                        || full.buyer_postalcode_err != "" || full.buyer_state_err != "" || full.card_payment_err != "" || full.last_payment_date_err != "" || full.membership_category_err != "" 
                                        || full.membership_enddate_err != "" || full.membership_option_err != "" || full.next_payment_date_err != "" || full.no_of_classes_err != "" || full.participant_dob_err != "" 
                                        || full.participant_fname_err != "" || full.participant_lname_err != "" || full.participant_rank_err != "" || full.payment_amount_err != "" || full.payment_frequency_err != "" 
                                        || full.payment_type_err != "" || full.processing_fee_err != "" || full.p_age_err !="")
                                        {
                                             if(full.participant_fname_err == "" && full.participant_lname_err == "")
                                            {
                                                return '<span class="white-bg-tooltip tooltips" ng-mouseover="showHoverTooltipForEllipsisOnly(\'p_na' + full.id + '\' ,' + "'col2'" + ',' + "'dataTable'" + ',' + "''" + ')">' +
                                                '<a class="participantNameEllipsis buyername_err" ng-click="openMigrationPopDetails(\'' +full.id+ '\');"><span class="dataTableTooltip"><span class="tooltiptexts dataTableTooltipTxt" style="width:max-content !important;">' +
                                                '<span style="line-height: 19px;font-size:15px;white-space: pre-line;">' + full.p_na + '</span></span>' +
                                                '</span><span id="p_na' + full.id + '"' + '>' + full.p_na +
                                                '</span></a></span>';
                                            }
                                            else
                                            {
                                                return '<span class="white-bg-tooltip tooltips" ng-mouseover="showHoverTooltipForEllipsisOnly(\'p_na' + full.id + '\' ,' + "'col2'" + ',' + "'dataTable'" + ',' + "''" + ')">' +
                                                '<a class="participantNameEllipsis buyername_err" ng-click="openMigrationPopDetails(\'' +full.id+ '\');"><span class="dataTableTooltip"><span class="tooltiptexts dataTableTooltipTxt" style="width:max-content !important;">' +
                                                '<span style="line-height: 19px;font-size:15px;white-space: pre-line;">Issue</span></span>' +
                                                '</span><span id="p_na' + full.id + '"' + '>Issue</span></a></span>';
                                            }
                                        }
                                        else
                                        {
                                            console.log ("exit")
                                        }
                                        
                                    }
                                    if($scope.activeMigrationTab == "P")
                                    {
                                        return '<span class="white-bg-tooltip tooltips" ng-mouseover="showHoverTooltipForEllipsisOnly(\'p_na' + full.id + '\' ,' + "'col2'" + ',' + "'dataTable'" + ',' + "''" + ')">' +
                                        '<a class="participantNameEllipsis buyername" ng-click="showName(\'' + full.id + '\' ,' + "'pending_migration'" + ');"><span class="dataTableTooltip"><span class="tooltiptexts dataTableTooltipTxt" style="width:max-content !important;">' +
                                        '<span style="line-height: 19px;font-size:15px;white-space: pre-line;">' + full.p_na + '</span></span>' +
                                        '</span><span id="p_na' + full.id + '"' + '>' + full.p_na +
                                        '</span></a></span>';
                                    }
                                    else
                                    {
                                        return '<span class="white-bg-tooltip tooltips" ng-mouseover="showHoverTooltipForEllipsisOnly(\'p_na' + full.id + '\' ,' + "'col2'" + ',' + "'dataTable'" + ',' + "''" + ')">' +
                                        '<a class="participantNameEllipsis buyername" ng-click="openMigrationPopDetails(\'' +full.id+ '\');"><span class="dataTableTooltip"><span class="tooltiptexts dataTableTooltipTxt" style="width:max-content !important;">' +
                                        '<span style="line-height: 19px;font-size:15px;white-space: pre-line;">' + full.p_na + '</span></span>' +
                                        '</span><span id="p_na' + full.id + '"' + '>' + full.p_na +
                                        '</span></a></span>';
                                    }
                                    
                                }),
                        DTColumnBuilder.newColumn('b_na').withTitle('<span>Primary customer</span>').withClass('col1').renderWith(
                            function (data, type, full) {
                                if($scope.activeMigrationTab == "E" && full.buyer_fname_err != "" || $scope.activeMigrationTab == "E" && full.buyer_lname_err != "")
                                {
                                    $scope.item = JSON.stringify(full);
                                    return '<span class="white-bg-tooltip tooltips" ng-mouseover="showHoverTooltipForEllipsisOnly(\'b_na' + full.id + '\' ,' + "'col1'" + ',' + "'dataTable'" + ',' + "''" + ')"><a class="participantNameEllipsis buyername_err" ng-click="openMigrationPopDetails(\'' +full.id+ '\');"><span class="dataTableTooltip"><span class="tooltiptexts dataTableTooltipTxt" style="width:max-content !important;">' +
                                    '<span style="line-height: 19px;font-size:15px;white-space: pre-line;" >Issue</span></span>' +
                                    '</span><span id="b_na' + full.id + '"' + '>Issue</span></a></span>';
                                }
                                else
                                {
                                    return '<span class="white-bg-tooltip tooltips" ng-mouseover="showHoverTooltipForEllipsisOnly(\'b_na' + full.id + '\' ,' + "'col1'" + ',' + "'dataTable'" + ',' + "''" + ')"><a class="participantNameEllipsis"><span class="dataTableTooltip"><span class="tooltiptexts dataTableTooltipTxt" style="width:max-content !important;">' +
                                        '<span style="line-height: 19px;font-size:15px;white-space: pre-line;">' + full.b_na + '</span></span>' +
                                        '</span><span id="b_na' + full.id + '"' + '>' + full.b_na +
                                        '</span></a></span>';
                                }
                            }),
                        DTColumnBuilder.newColumn('b_ph').withTitle('<span>Buyer phone</span>').withClass('col3').renderWith(
                            function (data, type, full) 
                            {
                                $scope.item = JSON.stringify(full);
                                if($scope.activeMigrationTab == "E" && full.buyer_phone_err != "")
                                {
                                    return '<span class="buyername_err" ng-click="openMigrationPopDetails(\'' +full.id+ '\');">Issue</span>';
                                }
                                else
                                {
                                    return full.b_ph;
                                }
                            }
                        ),
                        DTColumnBuilder.newColumn('b_em').withTitle('<span>Buyer email</span>').withClass('col4').renderWith(
                        function (data, type, full, meta) {
                            if($scope.activeMigrationTab == "E" && full.buyer_email_err != "")
                            {
                                $scope.item = JSON.stringify(full);
                                return '<span class="buyername_err" ng-click="openMigrationPopDetails(\'' +full.id+ '\');">Issue</span>';
                            }
                            else
                            {
                                if (full.bounce_flag === 'N') {
                                    if (full.email_subscription_status === 'U') {
                                        return '<span class="white-bg-tooltip tooltips" ng-mouseover="showHoverTooltipForEllipsisOnly(\'b_em1' + full.id + '\' ,' + "'col4'" + ',' + "'dataTable'" + ',' + "''" + ')"><img src="image/mail_error.png"  width="20" height="20">' +
                                                '<a class="emailEllipsis buyername1" ng-click="sendSubscribeEmail(\'' + full.b_em + '\');">' +
                                                '<span class="dataTableTooltip"><span class="tooltiptexts dataTableTooltipTxt" style="width:max-content !important">' +
                                                '<span style="line-height: 19px;font-size:15px;white-space: pre-line;">' + full.b_em + '</span>' +
                                                '</span></span><span id="b_em1' + full.id + '"' + '>'
                                                + "(Unsubscribed) " + full.b_em + 
                                                '</span></a></span>';
                                    } else {
                                        return '<span class="white-bg-tooltip tooltips" ng-mouseover="showHoverTooltipForEllipsisOnly(\'b_em2' + full.id + '\' ,' + "'col4'" + ',' + "'dataTable'" + ',' + "''" + ')">' +
                                            '<a class="emailEllipsis buyername" ng-click="sendindividualpush(\'' + full.id + '\' ,' + "'mail'" + ');">' +
                                            '<span class="dataTableTooltip"><span class="tooltiptexts dataTableTooltipTxt" style="width:max-content !important">' +
                                            '<span style="line-height: 19px;font-size:15px;white-space: pre-line;">' + full.b_em + '</span>' +
                                            '</span></span><span id="b_em2' + full.id + '"' + '>'
                                            + full.b_em +
                                            '</span></a></span>';
                                    }
                                } else {
                                    return '<span class="white-bg-tooltip tooltips" ng-mouseover="showHoverTooltipForEllipsisOnly(\'b_em3' + full.id + '\' ,' + "'col4'" + ',' + "'dataTable'" + ',' + "'bounceprgm'" + ')">' +
                                        '<a class="emailEllipsis buyername1" ng-click="showemailerror(\'' + meta.row + '\',\'' + full.bounce_flag + '\',\'' + data + '\',' + '$event' + ',\'' + full.id + '\');"><img src="image/mail_error.png"  width="20" height="20">' +
                                        '<span class="dataTableTooltip" ><span class="tooltiptexts dataTableTooltipTxt" style="width:max-content !important">' +
                                        '<span style="line-height: 19px;font-size:15px;white-space: pre-line;">' + full.b_em + '</span>' +
                                        '</span></span><span id="b_em3' + full.id + '"' + '>' +
                                        "(" + full.type + ") " + full.b_em +
                                        '</span></a></span>';
                                }
                            }
                            
                        }),
                        DTColumnBuilder.newColumn('participant_street').withTitle('<span>Buyer address</span>').withClass('col5').notSortable().renderWith(
                            function (data, type, full) 
                            {
                                $scope.item = JSON.stringify(full);
                                if($scope.activeMigrationTab == "E" && full.buyer_address_err != "")
                                {
                                    return '<span class="buyername_err" ng-click="openMigrationPopDetails(\'' +full.id+ '\');">Issue</span>';
                                }
                                else
                                {
                                    return full.participant_street;
                                }
                            }
                        ),
                        DTColumnBuilder.newColumn('participant_city').withTitle('<span>City</span>').withClass('col7').notSortable().renderWith(
                            function (data, type, full) 
                            {
                                $scope.item = JSON.stringify(full);
                                if($scope.activeMigrationTab == "E" && full.buyer_city_err != "")
                                {
                                    return '<span class="buyername_err" ng-click="openMigrationPopDetails(\'' +full.id+ '\');">Issue</span>';
                                }
                                else
                                {
                                    return full.participant_city;
                                }
                            }
                        ),
                        DTColumnBuilder.newColumn('participant_state').withTitle('<span>State/region/province</span>').withClass('col1').notSortable().renderWith(
                            function (data, type, full) 
                            {
                                $scope.item = JSON.stringify(full);
                                if($scope.activeMigrationTab == "E" && full.buyer_state_err != "")
                                {
                                    return '<span class="buyername_err" ng-click="openMigrationPopDetails(\'' +full.id+ '\');">Issue</span>';
                                }
                                else
                                {
                                    return full.participant_state;
                                }
                            }
                        ),
                        DTColumnBuilder.newColumn('participant_zip').withTitle('<span>Postal code</span>').withClass('col7').notSortable().renderWith(
                            function (data, type, full) 
                            {
                                $scope.item = JSON.stringify(full);
                                if($scope.activeMigrationTab == "E" && full.buyer_postalcode_err != "")
                                {
                                    return '<span class="buyername_err" ng-click="openMigrationPopDetails(\'' +full.id+ '\');">Issue</span>';
                                }
                                else
                                {
                                    return full.participant_zip;
                                }
                            }
                        ),
                        DTColumnBuilder.newColumn('participant_country').withTitle('<span>Country</span>').withClass('col7').notSortable().renderWith(
                            function (data, type, full) 
                            {
                                $scope.item = JSON.stringify(full);
                                if($scope.activeMigrationTab == "E" && full.buyer_country_err != "")
                                {
                                    return '<span class="buyername_err" ng-click="openMigrationPopDetails(\'' +full.id+ '\');">Issue</span>';
                                }
                                else
                                {
                                    return full.participant_country;
                                }
                            }
                        ),
                        DTColumnBuilder.newColumn('p_b_dt').withTitle('<span>Participant date of birth</span>').withClass('col1').renderWith(
                            function (data, type, full) 
                            {
                                $scope.item = JSON.stringify(full);
                                if($scope.activeMigrationTab == "E" && full.participant_dob_err != "")
                                {
                                    return '<span class="buyername_err" ng-click="openMigrationPopDetails(\'' +full.id+ '\');">Issue</span>';
                                }
                                else
                                {
                                    return full.p_b_dt;
                                }
                            }
                        ),
                        DTColumnBuilder.newColumn('participant_notes').withTitle('<span>Participant notes</span>').withClass('col1').notSortable(),
                        DTColumnBuilder.newColumn('m_c_t').withTitle('<span>Membership category</span>').withClass('col1').renderWith(
                            function (data, type, full) 
                            {
                                $scope.item = JSON.stringify(full);
                                if($scope.activeMigrationTab == "E" && full.membership_category_err != "")
                                {
                                    return '<span class="buyername_err" ng-click="openMemberPopDetails(\'' +full.id+ '\');">Issue</span>';
                                }
                                else
                                {
                                    return full.m_c_t;
                                }
                            }
                        ),
                        DTColumnBuilder.newColumn('m_t').withTitle('<span>Membership option</span>').withClass('col1').renderWith(
                            function (data, type, full) 
                            {
                                $scope.item = JSON.stringify(full);
                                if($scope.activeMigrationTab == "E" && (full.membership_option_err != "" || full.membership_category_err != ""))
                                {
                                    return '<span class="buyername_err" ng-click="openMemberPopDetails(\'' +full.id+ '\');">Issue</span>';
                                }
                                else
                                {
                                    return full.m_t;
                                }
                            }
                        ),
                        DTColumnBuilder.newColumn('end_date').withTitle('<span>Membership end date</span>').withClass('col1').renderWith(
                            function (data, type, full) 
                            {
                                $scope.item = JSON.stringify(full);
                                if($scope.activeMigrationTab == "E" && full.membership_enddate_err != "")
                                {
                                    $scope.item = JSON.stringify(full);
                                    return '<span class="buyername_err" ng-click="openMemberPopDetails(\'' +full.id+ '\');">Issue</span>';
                                }
                                else
                                {
                                    return  full.end_date;
                                }
                            }
                        ),
                        DTColumnBuilder.newColumn('nt_py_am').withTitle('<span>Payment amount</span>').withClass('col12').renderWith(
                            function (data, type, full) 
                            {
                                $scope.item = JSON.stringify(full);
                                if($scope.activeMigrationTab == "E" && full.payment_amount_err != "")
                                {
                                    $scope.item = JSON.stringify(full);
                                    return '<span class="buyername_err" ng-click="openMemberPopDetails(\'' +full.id+ '\');">Issue</span>';
                                }
                                else
                                {
                                    return  $scope.wp_currency_symbol +''+data;
                                }
                            }
                        ),
                        DTColumnBuilder.newColumn('custom_count').withTitle('<span>Payment interval</span>').withClass('col12').notSortable().renderWith(                       
                             function (data, type, full) 
                             {
                                    var payment_interval;
                                    if(full.custom_count === null || full.custom_count < 1)
                                    {
                                        payment_interval = 1;
                                    }else{
                                        payment_interval = full.custom_count;
                                    }
                                     return  payment_interval;
                                
                             }
                         ),
                        DTColumnBuilder.newColumn('payment_frequency').withTitle('<span>Payment frequency</span>').withClass('col12').notSortable().renderWith(
                            function (data, type, full) 
                            {
                                $scope.item = JSON.stringify(full);
                                if($scope.activeMigrationTab == "E" && (full.payment_frequency_err != "" || full.custom_frequency_type_err != ""))
                                {
                                    $scope.item = JSON.stringify(full);
                                    return '<span class="buyername_err" ng-click="openMemberPopDetails(\'' +full.id+ '\');">Issue</span>';
                                }
                                else
                                {
                                    var freq;
                                    if(full.payment_frequency =="B")
                                    {
                                        freq = "Semi-monthly";
                                    }
                                    if(full.payment_frequency =="N")
                                    {
                                        freq = "None";
                                    }
                                    if(full.payment_frequency =="C")
                                    {                                       
                                        if(full.custom_frequency == 'CW'){
                                            freq = "Custom weekly";
                                        }else if(full.custom_frequency == 'CM'){
                                            freq = "Custom monthly";
                                        }else if(full.custom_frequency == 'CY'){
                                            freq = "Custom yearly";
                                        }else{
                                            freq = "";
                                        }
                                    }
                                    if(full.payment_frequency =="A")
                                    {
                                        freq = "Annually";
                                    }
                                    if(full.payment_frequency =="M")
                                    {
                                        freq = "Monthly";
                                    }
                                    if(full.payment_frequency =="W")
                                    {
                                        freq = "Weekly";
                                    }
                                    return  freq;
                                }
                            }
                        ),
                        DTColumnBuilder.newColumn('tax_percentage').withTitle('<span>Tax %</span>').withClass('col8').renderWith(
                            function (data, type, full) 
                            {
                                $scope.item = JSON.stringify(full);
                                if($scope.activeMigrationTab == "E" && full.tax_percentage_err != "")
                                {
                                    $scope.item = JSON.stringify(full);
                                    return '<span class="buyername_err" ng-click="openMemberPopDetails(\'' +full.id+ '\');">Issue</span>';
                                }
                                else
                                {
                                    return  full.tax_percentage;
                                }
                            }
                        ),
                        DTColumnBuilder.newColumn('processing_fee_type').withTitle('<span>Processing fees</span>').withClass('col12').notSortable().renderWith(
                            function (data, type, full) 
                            {
                                $scope.item = JSON.stringify(full);
                                if($scope.activeMigrationTab == "E" && full.processing_fee_err != "")
                                {
                                    $scope.item = JSON.stringify(full);
                                    return '<span class="buyername_err" ng-click="openMemberPopDetails(\'' +full.id+ '\');">Issue</span>';
                                }
                                else
                                {
                                    var fee;
                                    if(full.processing_fee_type =="1")
                                    {
                                        fee = "Absorb"
                                    }
                                    else
                                    {
                                        fee = "Pass on"
                                    }
                                    return  fee;
                                }
                            }
                        ),
                        DTColumnBuilder.newColumn('nt_py_dt').withTitle('<span>Next payment date</span>').withClass('col17').renderWith(
                            function (data, type, full) 
                            {
                                $scope.item = JSON.stringify(full);
                                if($scope.activeMigrationTab == "E" && full.next_payment_date_err != "")
                                {
                                    $scope.item = JSON.stringify(full);
                                    return '<span class="buyername_err" ng-click="openMemberPopDetails(\'' +full.id+ '\');">Issue</span>';
                                }
                                else
                                {
                                    return  full.nt_py_dt;
                                }
                            }
                        ),
                        DTColumnBuilder.newColumn('last_py_dt').withTitle('<span>Last payment date</span>').withClass('col17').renderWith(
                            function (data, type, full) 
                            {
                                $scope.item = JSON.stringify(full);
                                if($scope.activeMigrationTab == "E" && full.last_payment_date_err != "")
                                {
                                    $scope.item = JSON.stringify(full);
                                    return '<span class="buyername_err" ng-click="openMemberPopDetails(\'' +full.id+ '\');">Issue</span>';
                                }
                                else
                                {
                                    return  full.last_py_dt;
                                }
                            }
                        ),
                        DTColumnBuilder.newColumn('payment_method').withTitle('<span>Payment type</span>').withClass('col17').notSortable().renderWith(
                            function (data, type, full) 
                            {
                                $scope.item = JSON.stringify(full);
                                if($scope.activeMigrationTab == "E" && full.payment_type_err != "")
                                {
                                    $scope.item = JSON.stringify(full);
                                    return '<span class="buyername_err" ng-click="openMemberPopDetails(\'' +full.id+ '\');">Issue</span>';
                                }
                                else
                                {
                                    return  full.payment_method === 'CA' ? 'Cash' : full.payment_method;
                                }
                            }
                        ),
                        DTColumnBuilder.newColumn('migration_last_four').withTitle('<span>Last 4 digits of payment card</span>').withClass('col1-large').notSortable().renderWith(
                            function (data, type, full, meta) 
                            {
                                if($scope.activeMigrationTab == "E" && full.card_payment_err != "")
                                {
                                    $scope.item = JSON.stringify(full);
                                    return '<span class="buyername_err" ng-click="openMemberPopDetails(\'' +full.id+ '\');">Issue</span>';
                                }
                                else
                                {
                                    return  full.migration_last_four;
                                }
                            }),
                        DTColumnBuilder.newColumn('rank_status').withTitle('<span>Participant rank/level</span>').withClass('col1').renderWith(
                            function (data, type, full, meta) 
                            {
                                if($scope.activeMigrationTab == "E" && full.participant_rank_err != "")
                                {
                                    $scope.item = JSON.stringify(full);
                                    return '<span class="buyername_err" ng-click="openMemberPopDetails(\'' +full.id+ '\');">Issue</span>';
                                }
                                else
                                {
                                    return  full.rank_status;
                                }
                            }),
                        DTColumnBuilder.newColumn('attendance_limit').withTitle('<span>Attendance limit count</span>').withClass('col1').renderWith(
                            function (data, type, full) 
                            {
                                $scope.item = JSON.stringify(full);
                                if($scope.activeMigrationTab == "E" && full.attendance_limit_count_err != "")
                                {
                                    $scope.item = JSON.stringify(full);
                                    return '<span class="buyername_err" ng-click="openMemberPopDetails(\'' +full.id+ '\');">Issue</span>';
                                }
                                else
                                {
                                    return  full.attendance_limit;
                                }
                            }
                        ),
                        DTColumnBuilder.newColumn('attendance_limit_frequency').withTitle('<span>Attendance limit frequency</span>').withClass('col1-large').notSortable().renderWith(
                            function (data, type, full) 
                            {
                                $scope.item = JSON.stringify(full);
                                if($scope.activeMigrationTab == "E" && full.attendance_limit_frequency_err != "")
                                {
                                    $scope.item = JSON.stringify(full);
                                    return '<span class="buyername_err" ng-click="openMemberPopDetails(\'' +full.id+ '\');">Issue</span>';
                                }
                                else
                                {
                                    var attendance_limit_frequency = "";
                                    if (full.attendance_limit_frequency === 'CPW') {
                                        attendance_limit_frequency = "Classes per week";
                                    } else if (full.attendance_limit_frequency === 'CPM') {
                                        attendance_limit_frequency = "Classes per month";
                                    } else {
                                        attendance_limit_frequency = "None";
                                    }
                                    return  attendance_limit_frequency;
                                }
                            }
                        ),
                        DTColumnBuilder.newColumn('no_of_classes').withTitle('<span>Number of class/appts remaining</span>').withClass('col1-large').renderWith(
                            function (data, type, full) 
                            {
                                $scope.item = JSON.stringify(full);
                                if($scope.activeMigrationTab == "E" && full.no_of_classes_err != "")
                                {
                                    $scope.item = JSON.stringify(full);
                                    return '<span class="buyername_err" ng-click="openMemberPopDetails(\'' +full.id+ '\');">Issue</span>';
                                }
                                else
                                {
                                    return  full.no_of_classes;
                                }
                            }
                        ),
                        DTColumnBuilder.newColumn($rootScope.custom_field_title.par_custom_field_title_1).withTitle(`<span  class="" data-toggle="tooltip" title="${$rootScope.custom_field_title.par_custom_field_title_1}"> ${$rootScope.custom_field_title.par_custom_field_title_1} </span>`).withClass('new_home_col5 txt-ellipsis').withOption('visible', $rootScope.custom_field_title.par_custom_field_title_1 !== '' ? true : false).notSortable().
                        renderWith(function (data, type, full, meta) {
                            if (full.par_custom_field_value_1) {
                                return `<span  class="" data-toggle="tooltip" title="${full.par_custom_field_value_1}"> ${full.par_custom_field_value_1} </span>`;
                            } else {
                                return '<span  class="" data-toggle="tooltip" title=""></span>';
                            }
                        }),
                        DTColumnBuilder.newColumn($rootScope.custom_field_title.par_custom_field_title_2).withTitle(`<span  class="" data-toggle="tooltip" title="${$rootScope.custom_field_title.par_custom_field_title_2}"> ${$rootScope.custom_field_title.par_custom_field_title_2} </span>`).withClass('new_home_col5 txt-ellipsis').withOption('visible', $rootScope.custom_field_title.par_custom_field_title_2 !== '' ? true : false).notSortable().
                        renderWith(function (data, type, full, meta) {
                            if (full.par_custom_field_value_2) {
                                return '<span  class="" data-toggle="tooltip" title="' + full.par_custom_field_value_2 + '" >' + full.par_custom_field_value_2 + '</span>';
                            } else {
                                return '<span  class="" data-toggle="tooltip" title=""></span>';
                            }
                        }),
                        DTColumnBuilder.newColumn($rootScope.custom_field_title.par_custom_field_title_3).withTitle(`<span  class="" data-toggle="tooltip" title="${$rootScope.custom_field_title.par_custom_field_title_3}"> ${$rootScope.custom_field_title.par_custom_field_title_3} </span>`).withClass('new_home_col5 txt-ellipsis').withOption('visible', $rootScope.custom_field_title.par_custom_field_title_3 !== '' ? true : false).notSortable().
                        renderWith(function (data, type, full, meta) {
                            if (full.par_custom_field_value_3) {
                                return '<span  class="" data-toggle="tooltip" title="' + full.par_custom_field_value_3 + '" >' + full.par_custom_field_value_3 + '</span>';
                            } else {
                                return '<span  class="" data-toggle="tooltip" title=""></span>';
                            }
                        }),
                        DTColumnBuilder.newColumn($rootScope.custom_field_title.par_custom_field_title_4).withTitle(`<span  class="" data-toggle="tooltip" title="${$rootScope.custom_field_title.par_custom_field_title_4}"> ${$rootScope.custom_field_title.par_custom_field_title_4} </span>`).withClass('new_home_col5 txt-ellipsis').withOption('visible', $rootScope.custom_field_title.par_custom_field_title_4 !== '' ? true : false).notSortable().
                        renderWith(function (data, type, full, meta) {
                            if (full.par_custom_field_value_4) {
                                return '<span  class="" data-toggle="tooltip" title="' + full.par_custom_field_value_4 + '" >' + full.par_custom_field_value_4 + '</span>';
                            } else {
                                return '<span  class="" data-toggle="tooltip" title=""></span>';
                            }
                        }),
                        DTColumnBuilder.newColumn($rootScope.custom_field_title.par_custom_field_title_5).withTitle(`<span  class="" data-toggle="tooltip" title="${$rootScope.custom_field_title.par_custom_field_title_5}"> ${$rootScope.custom_field_title.par_custom_field_title_5} </span>`).withClass('new_home_col5 txt-ellipsis').withOption('visible', $rootScope.custom_field_title.par_custom_field_title_5 !== '' ? true : false).notSortable().
                        renderWith(function (data, type, full, meta) {
                            if (full.par_custom_field_value_5) {
                                return '<span  class="" data-toggle="tooltip" title="' + full.par_custom_field_value_5 + '" >' + full.par_custom_field_value_5 + '</span>';
                            } else {
                                return '<span  class="" data-toggle="tooltip" title=""></span>';
                            }
                        }),
                        DTColumnBuilder.newColumn($rootScope.custom_field_title.par_custom_field_title_6).withTitle(`<span  class="" data-toggle="tooltip" title="${$rootScope.custom_field_title.par_custom_field_title_6}"> ${$rootScope.custom_field_title.par_custom_field_title_6} </span>`).withClass('new_home_col5 txt-ellipsis').withOption('visible', $rootScope.custom_field_title.par_custom_field_title_6 !== '' ? true : false).notSortable().
                        renderWith(function (data, type, full, meta) {
                            if (full.par_custom_field_value_6) {
                                return '<span  class="" data-toggle="tooltip" title="' + full.par_custom_field_value_6 + '" >' + full.par_custom_field_value_6 + '</span>';
                            } else {
                                return '<span  class="" data-toggle="tooltip" title=""></span>';
                            }
                        }),
                        DTColumnBuilder.newColumn($rootScope.custom_field_title.par_custom_field_title_7).withTitle(`<span  class="" data-toggle="tooltip" title="${$rootScope.custom_field_title.par_custom_field_title_7}"> ${$rootScope.custom_field_title.par_custom_field_title_7} </span>`).withClass('new_home_col5 txt-ellipsis').withOption('visible', $rootScope.custom_field_title.par_custom_field_title_7 !== '' ? true : false).notSortable().
                        renderWith(function (data, type, full, meta) {
                            if (full.par_custom_field_value_7) {
                                return '<span  class="" data-toggle="tooltip" title="' + full.par_custom_field_value_7 + '" >' + full.par_custom_field_value_7 + '</span>';
                            } else {
                                return '<span  class="" data-toggle="tooltip" title=""></span>';
                            }
                        }),
                        DTColumnBuilder.newColumn($rootScope.custom_field_title.par_custom_field_title_8).withTitle(`<span  class="" data-toggle="tooltip" title="${$rootScope.custom_field_title.par_custom_field_title_8}"> ${$rootScope.custom_field_title.par_custom_field_title_8} </span>`).withClass('new_home_col5 txt-ellipsis').withOption('visible', $rootScope.custom_field_title.par_custom_field_title_8 !== '' ? true : false).notSortable().
                        renderWith(function (data, type, full, meta) {
                            if (full.par_custom_field_value_8) {
                                return '<span  class="" data-toggle="tooltip" title="' + full.par_custom_field_value_8 + '" >' + full.par_custom_field_value_8 + '</span>';
                            } else {
                                return '<span  class="" data-toggle="tooltip" title=""></span>';
                            }
                        }),
                        DTColumnBuilder.newColumn($rootScope.custom_field_title.par_custom_field_title_9).withTitle(`<span  class="" data-toggle="tooltip" title="${$rootScope.custom_field_title.par_custom_field_title_9}"> ${$rootScope.custom_field_title.par_custom_field_title_9} </span>`).withClass('new_home_col5 txt-ellipsis').withOption('visible', $rootScope.custom_field_title.par_custom_field_title_9 !== '' ? true : false).notSortable().
                        renderWith(function (data, type, full, meta) {
                            if (full.par_custom_field_value_9) {
                                return '<span  class="" data-toggle="tooltip" title="' + full.par_custom_field_value_9 + '" >' + full.par_custom_field_value_9 + '</span>';
                            } else {
                                return '<span  class="" data-toggle="tooltip" title=""></span>';
                            }
                        }),
                        DTColumnBuilder.newColumn($rootScope.custom_field_title.par_custom_field_title_10).withTitle(`<span  class="" data-toggle="tooltip" title="${$rootScope.custom_field_title.par_custom_field_title_10}"> ${$rootScope.custom_field_title.par_custom_field_title_10} </span>`).withClass('new_home_col5 txt-ellipsis').withOption('visible', $rootScope.custom_field_title.par_custom_field_title_10 !== '' ? true : false).notSortable().
                        renderWith(function (data, type, full, meta) {
                            if (full.par_custom_field_value_10) {
                                return '<span  class="" data-toggle="tooltip" title="' + full.par_custom_field_value_10 + '" >' + full.par_custom_field_value_10 + '</span>';
                            } else {
                                return '<span  class="" data-toggle="tooltip" title=""></span>';
                            }
                        })

                        ];
                   $scope.dtInstance = {};
                }else{
                    var from = "";
                    var filter_mem_id = '';
                    var current_page = "";
                    if (tab1 == "initial") {
                        if ($rootScope.fromOnholdDashboard === 'Y' || $localStorage.fromOnholdDashboard == 'Y') {
                            from = "hold";
                            $scope.current_tab = [];
                            $scope.current_tab.push('P');
                        } else if ($localStorage.memfilterdetails && Object.keys($localStorage.memfilterdetails).length > 0 && ($localStorage.page_from == 'memdetail' || $localStorage.page_from == 'buyerprofile_membership' || $localStorage.page_from == 'customers')) {
                           $scope.current_tab = [];
                           $scope.current_tab = $localStorage.memfilterdetails.selected_filter_options.status.status_type;
                           $rootScope.filter_details = $localStorage.memfilterdetails.filter_details;
                           $rootScope.filter_options = $localStorage.memfilterdetails.filter_options;
                            $rootScope.filter_details = ($localStorage.memfilterdetails.selected_filter_details) ? $localStorage.memfilterdetails.selected_filter_details : $rootScope.filter_details ; // here localstorage variable is stored into selected_filter_details for internal page redirection
                            $rootScope.filter_options = ($localStorage.memfilterdetails.selected_filter_options) ? ($localStorage.memfilterdetails.selected_filter_options) : ($localStorage.memfilterdetails.editedFilterOpt ? ($localStorage.memfilterdetails.editedFilterOpt) : ($rootScope.filter_options)) ; // here localstorage  variable is stored into selected_filter_options for internal page redirection
                            current_page = "program";
                        }else if ($localStorage.page_from == 'frommanageID') {
                            from = "manage"
                            filter_mem_id = $localStorage.toCusList.membershipcategory_id
                        }else{
                            from ="initial";
                            $scope.current_tab = [];
                            $scope.current_tab.push('R');
                        }
                    }else{
                        $scope.current_tab = [];
                        $scope.current_tab = $rootScope.filter_options.status.status_type;
                    }
                
                DTDefaultOptions.setLoadingTemplate('<div class="spinner-loader-full"></div>');
                    var titleHtml = '<input type="checkbox" ng-model="selectAll" ng-change="toggleAll(selectAll, selected)">';
                var phone ='<span class="card-icon eventactionlinks"><i class="fa fa-mobile-phone fa-3x green"></i></span>'; 
                if(tab1 != 'delete'){
                    $scope.change_made = $scope.search_value = '';
                    $scope.selected = {};
                    $scope.selectAll = false;
                    $scope.selectedData = [];
                    $scope.mempendingcount = 0;
                    $scope.resend_pending_flag = 'N';
                    $scope.selected_resend_invite_count = 0;
                    $scope.mass_rank.selected_next_rank_count = 0;
                    $scope.all_select_flag = $rootScope.all_select_flag_email = "N";
                    $rootScope.email_unselected_ids = [];
                    $scope.email_unselected_list = false;
                    $scope.selectAll = false;
                    $rootScope.email_selected_ids = [];
                    $scope.show_del_flag = 'N';
                    $rootScope.age_lower_limit=$scope.age_lower_limit_temp;
                    $rootScope.age_upper_limit=$scope.age_upper_limit_temp;
                }
                    $scope.dtOptions = DTOptionsBuilder.newOptions()
                        .withOption('ajax', {
                            url: urlservice.url + 'getFilterDetails',
                            xhrFields: {
                                withCredentials: true
                             },
                            dataSrc: function (json) {
                                $scope.mempendingcount = 0;
                                $scope.membershiplistcontents = json.data;
                                $scope.liveviewcount = json.live_count;
                                $scope.draftviewcount = json.draft_count;
                                $rootScope.total_receipients = $scope.total_receipients = json.recordsFiltered;
                                $scope.total_program_records = json.recordsFiltered;
                                $scope.mass_rank.total_next_rank_flag = json.total_next_rank_flag;
                                $scope.mass_rank.total_next_rank_count = json.next_rank_count;
                                $scope.total_resend_invite_count = json.resend_invite_count;
                                $scope.resend_pending_flag = json.resend_pending_flag;
                                $scope.resetSelectedVariables = false;
                                if(tab1 == 'initial'){
                                    $scope.openranktabForProgram = false;
                                    $scope.getcustomtitlelist("program");
                                    $rootScope.get_filter_list_default('default');
                                    $scope.getLiveProgramNames(tab,'');
                                    $scope.getMembershipforaddparticipant();
                                    $rootScope.get_migrationdetails();
                                    tab1 = '';
                                    current_page = '';
                                }
                                $('#DataTables_Table_0_wrapper').addClass('program_table');
                                $('#DataTables_Table_0_wrapper').removeClass('migration_table');
                                if ($rootScope.total_receipients > 0) {
                                    $scope.show_total_rec = true;
                                } else {
                                    $scope.show_total_rec = false;
                                    $scope.resetDataTableVariables();
                                }
                                if(tab1 == "delete"){
                                    tab1 = "";
                                    $scope.resetDataTableVariables();
                                }
                                if ($scope.call_hidecol) {
                                        $scope.hidecol();
                                }
                                $scope.call_hidecol = false;
                                document.querySelector('#DataTables_Table_0_filter.dataTables_filter').style = "top: -39px !important";
                                if(!$scope.$$phase) {$scope.$apply();}
                                console.log("json");
                                return json.data;
                            },
                            type: 'POST',
                            dataType: 'json',
                            data: {
                                "company_id": $localStorage.company_id,
                                "filter_id":((tab1 == "initial") && (current_page == "" )) ?  '' : $rootScope.filter_details.filter_id,
                                "filter_category": 'P', //P- program
                                "filter_type":'AP', //All Participant
                                "filter_options":((tab1 == "initial") && (current_page == "" )) ?  '' : JSON.stringify($rootScope.filter_options),
                                "type" : 'datatable',
                                "tab" : tab1,
                                "from" : (tab1 == "initial") ? from : '', 
                                "mem_id" : ((tab1 == "initial") && from == "manage") ? filter_mem_id : '',
                                "selected_data" : $scope.selectedData,  // Data table api trigger for after delete
                                "email_unselected_ids" : $rootScope.email_unselected_ids,  // Data table api trigger for after delete
                                "rank_id": (tab1 == "update") ? $scope.selectedRankId : '', // Data table api trigger for after rank update
                                "membership_reg_id":  (tab1 == "update") ?$scope.membership_reg_id : '', // Data table api trigger for after rank update
                            },
                            error: function (xhr, error, thrown) {
                                 
                                if (xhr.responseJSON.status === "Failed") {
                                    $('#progress-full').hide();
                                    $("#pushmessageModal").modal('show');
                                    $("#pushmessagetitle").text('Message');
                                    $("#pushmessagecontent").text(xhr.responseJSON.msg);
                                }else if(xhr.responseJSON.status === 'Expired'){
                                    $('#progress-full').hide();
                                    $("#messageModal").modal('show');
                                    $("#messagetitle").text('Message');
                                    $("#messagecontent").text(xhr.responseJSON.msg);
                                    $scope.logout();  
                                }else if (xhr.responseJSON.status === 'Version') {
                                    $('#progress-full').hide();
                                    $scope.handleFailure(xhr.responseJSON.msg);
                                }else{
                                    $('#progress-full').hide();
                                }
                            }
                           
                        })

                        .withOption('createdRow', function (row, data, dataIndex) {
                            // Recompiling so we can bind Angular directive to the DT
                            $compile(angular.element(row).contents())($scope);
                        })
                        .withOption('headerCallback', function (header) {
                            // Use this headerCompiled field to only compile header once
                            $scope.headerCompiled = true;
                            $compile(angular.element(header).contents())($scope);
                        })
                        .withOption('fnPreDrawCallback', function () {
                            $scope.paginationDetailsSetInPreDraw();
                            var SearchWaitStatus = $scope.SearchWaitRequest();
                            if(!SearchWaitStatus){
                                return false;
                            } 
                            $scope.ClearInter = 0;
                            $scope.preload_previous_search = document.querySelector('.dataTables_filter input').value;
                            $('#progress-full').show();
                        })
                        .withOption('fnDrawCallback', function () {
                            if( $scope.loaderhide.loaderhide){
                                $('#progress-full').hide();
                            }
                            console.log('fnDrawCallback');
                            $scope.paginationDetailsSetInPostDraw();
                        })
                        .withOption('initComplete', function(settings, json) {
                            console.log('initComplete');
                            $scope.loaderhide.loaderhide = true;
                         $('#progress-full').hide();
                        });
                        
                  $scope.dtOptions = $scope.setDatatableCommonOption($scope.dtOptions,'program');
                    $scope.dtColumns = [
                        DTColumnBuilder.newColumn(null).withTitle(titleHtml).notSortable()
                                .renderWith(function (data, type, full, meta) {
                                 var index =  $scope.membershiplistcontents.findIndex(obj => obj.id ==  data.id);
                                 if(index >= 0){
                                    if($scope.selectAll==true  || $scope.email_unselected_list){
                                         $scope.selected[full.id] = true;
                                        // Maintain unselect
                                        for (var id in  $scope.selected) {
                                            if ($rootScope.email_unselected_ids.length > 0) {
                                                for (var x = 0; x < $rootScope.email_unselected_ids.length; x++) {
                                                    if (id === $rootScope.email_unselected_ids[x].id) {
                                                        $scope.selected[id] = false;
                                                    }
                                                }
                                            }
                                        }
                                    }else {
                                        $scope.selected[full.id] = false;
                                        for (var id in  $scope.selected) {
                                            if ($scope.selectedData.length > 0) {
                                                for (var x = 0; x < $scope.selectedData.length; x++) {
                                                    if (id === $scope.selectedData[x].id) {
                                                        $scope.selected[id] = true;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    // Clear selected items when search apply
                                    $rootScope.email_selected_ids = $scope.selectedData;
                                    if($scope.searchTerm){
                                        if((!$scope.searchClearData) || ($scope.searchClearData != $scope.searchTerm)){
                                            $scope.searchClearData = $scope.searchTerm;
                                            $scope.selectedData = [];
                                            $scope.all_select_flag = 'N';
                                            $rootScope.all_select_flag_email = 'N';
                                            $scope.show_del_flag = 'N';
                                            $rootScope.email_unselected_ids = [];
                                            $scope.email_unselected_list = false;
                                            $scope.selectAll = false;
                                            $rootScope.email_selected_ids = [];
                                            $scope.selected[full.id] = false;
                                            $scope.mass_rank.selected_next_rank_count = 0;
                                            $scope.selected_resend_invite_count = 0;
                                            for (var id in  $scope.selected) {
                                                if ($scope.selectedData.length > 0) {
                                                    for (var x = 0; x < $scope.selectedData.length; x++) {
                                                        if (id === $scope.selectedData[x].id) {
                                                            $scope.selected[id] = false;
                                                        }
                                                    }
                                                }
                                            }
                                         }
                                    }else if($scope.searchClearData && !$scope.searchTerm){
                                            $scope.searchClearData = ''; 
                                           $scope.selectedData = [];
                                            $scope.all_select_flag = 'N';
                                            $rootScope.all_select_flag_email = 'N';
                                            $scope.show_del_flag = 'N';
                                            $rootScope.email_unselected_ids = [];
                                            $scope.email_unselected_list = false;
                                            $scope.selectAll = false;
                                            $rootScope.email_selected_ids = [];
                                            $scope.selected[full.id] = false;
                                            $scope.mass_rank.selected_next_rank_count = 0;
                                            $scope.selected_resend_invite_count = 0;
                                            for (var id in  $scope.selected) {
                                                if ($scope.selectedData.length > 0) {
                                                    for (var x = 0; x < $scope.selectedData.length; x++) {
                                                        if (id === $scope.selectedData[x].id) {
                                                            $scope.selected[id] = false;
                                                        }
                                                    }
                                                }
                                            }
                                    }else{
                                        $scope.searchClearData = '';
                                    }
                                        return '<input type="checkbox" ng-model="selected[' + data.id + ']" ng-change="toggleOne(selected ,\'' + full.id + '\')"/>';
                                    }else{
                                        return '';
                                    } 
                                }),
                DTColumnBuilder.newColumn('p_na').withTitle('<span>Participant</span>').withClass('col2').renderWith(
                        function (data, type, full) {
                            let str = `<span class="white-bg-tooltip tooltips" ng-mouseover="showHoverTooltipForEllipsisOnly('p_na${full.id}','col2', 'dataTable','')">`
                            if(full.b_na.includes('user_deleted_')){
                                str += `<a class="participantNameEllipsis buyername" style="cursor:default;color:#999;text-decoration:none">`
                            } else if(full.m_s == 'Q'){
                                str += `<a class="participantNameEllipsis buyername" ng-click="redirectToSpos('${full.id}','${full.m_id}','${full.m_op_id}')">`   
                            }else {
                                str += `<a class="participantNameEllipsis buyername" ng-click="showName('${full.id}' ,'active');">`
                            }
                            str += `<span class="dataTableTooltip"><span class="tooltiptexts dataTableTooltipTxt" style="width:max-content !important;">
                                    <span style="line-height: 19px;font-size:15px;white-space: pre-line;">${full.p_na}</span></span>
                                    </span><span id="p_na${full.id}">${full.p_na}
                                    </span></a></span>`
                            return str;
                        }),
                DTColumnBuilder.newColumn('b_na').withTitle('<span>Customer</span>').withClass('col1').renderWith(
                        function (data, type, full) {
                            if(full.m_s == 'Q' || full.b_na.includes('user_deleted_')){
                                return '<span class="white-bg-tooltip tooltips" ng-mouseover="showHoverTooltipForEllipsisOnly(\'b_na' + full.id + '\' ,' + "'col1'" + ',' + "'dataTable'" + ',' + "''" + ')"><a class="participantNameEllipsis buyername" style="cursor:default;color:#999;text-decoration:none"><span class="dataTableTooltip"><span class="tooltiptexts dataTableTooltipTxt" style="width:max-content !important;">' +
                                    '<span style="line-height: 19px;font-size:15px;white-space: pre-line;">' + full.b_na + '</span></span>' +
                                    '</span><span id="b_na' + full.id + '"' + '>' + full.b_na +
                                    '</span></a></span>';
                            }else {
                                return '<span class="white-bg-tooltip tooltips" ng-mouseover="showHoverTooltipForEllipsisOnly(\'b_na' + full.id + '\' ,' + "'col1'" + ',' + "'dataTable'" + ',' + "''" + ')"><a class="participantNameEllipsis buyername" ng-click="showcustomerName(\'' + full.id + '\' ,' + "'active'" + ','+ full.student_id + ',\'\',\'' + full.buyer_type_ref +'\',' + "'customers'" + ')"><span class="dataTableTooltip"><span class="tooltiptexts dataTableTooltipTxt" style="width:max-content !important;">' +
                                '<span style="line-height: 19px;font-size:15px;white-space: pre-line;">' + full.b_na + '</span></span>' +
                                '</span><span id="b_na' + full.id + '"' + '>' + full.b_na +
                                '</span></a></span>';
                            }
                        }),
                DTColumnBuilder.newColumn('b_ph').withTitle('<span>Mobile Phone</span>').withClass('col3').renderWith(
                        function (data, type, full, meta) {
                                if (full.b_ph != '') {
                                    if ($rootScope.twilio_number != '') {
                                        if (full.phone_number_bounce_flag === 'N') {
                                            if (full.phone_subscription_status === 'U') {
                                                return '<span class="white-bg-tooltip tooltips" ng-mouseover="showHoverTooltipForEllipsisOnly(\'p_em1' + full.id + '\' ,' + "'col3'" + ',' + "'dataTable'" + ',' + "''" + ')">' +
                                                    '<a class="emailEllipsis buyername1"  ng-click="sendSubscribesms(\'' + full.phone_number_formatted + '\' ,' + '\'' + full.b_em + '\'' + ');">' +
                                                    '<span class="dataTableTooltip"><span class="tooltiptexts dataTableTooltipTxt" style="width:max-content !important">' +
                                                    '<span style="line-height: 19px;font-size:15px;white-space: pre-line;">' + full.b_ph + '</span>' +
                                                    '</span></span><span id="p_em1' + full.id + '"' + '>'
                                                    + "(Unsubscribed) " + full.b_ph +
                                                    '</span></a></span>';
                                            } else {
                                                return '<span class="white-bg-tooltip tooltips" ng-mouseover="showHoverTooltipForEllipsisOnly(\'p_em2' + full.id + '\' ,' + "'col3'" + ',' + "'dataTable'" + ',' + "''" + ')">' +
                                                    '<a class="emailEllipsis">' +
                                                    '<span class="dataTableTooltip"><span class="tooltiptexts dataTableTooltipTxt" style="width:max-content !important">' +
                                                    '<span style="line-height: 19px;font-size:15px;white-space: pre-line;">' + full.b_ph + '</span>' +
                                                    '</span></span><span id="p_em2' + full.id + '"' + '>'
                                                    + full.b_ph +
                                                    '</span></a></span>';
                                            }
                                        } else {
                                            return '<span class="white-bg-tooltip tooltips" ng-mouseover="showHoverTooltipForEllipsisOnly(\'p_em3' + full.id + '\' ,' + "'col3'" + ',' + "'dataTable'" + ',' + "'bounceevent'" + ')">' +
                                                    '<a class="emailEllipsis buyername1"  ng-click="showphonenumbererror(\'' + full.phone_number_formatted + '\',\'' + full.phone_number_error + '\');">' +
                                                    '<span class="dataTableTooltip" ><span class="tooltiptexts dataTableTooltipTxt" style="width:max-content !important";>' +
                                                    '<span style="line-height: 19px;font-size:15px;white-space: pre-line;">' + full.b_ph + '</span>' +
                                                    '</span></span><span id="p_em3' + full.id + '"' + '>' +
                                                    "(" + full.phone_bounce_type + ") " + full.b_ph +
                                                    '</span></a></span>';
                                        }
                                    }
                                    else {
                                     return '<span class="white-bg-tooltip tooltips" ng-mouseover="showHoverTooltipForEllipsisOnly(\'p_em4' + full.id + '\' ,' + "'col3'" + ',' + "'dataTable'" + ',' + "''" + ')">' +
                                            '<a class="emailEllipsis">' +
                                            '<span class="dataTableTooltip"><span class="tooltiptexts dataTableTooltipTxt" style="width:max-content !important">' +
                                            '<span style="line-height: 19px;font-size:15px;white-space: pre-line;">' + full.b_ph + '</span>' +
                                            '</span></span><span id="p_em4' + full.id + '"' + '>'
                                            + full.b_ph +
                                            '</span></a></span>';
                                    }
                                }else{
                                    return '<span>' + '' + '</span>';
                                }
                            
                        }),
                DTColumnBuilder.newColumn('b_em').withTitle('<span>Email</span>').withClass('col4').renderWith(
                        function (data, type, full, meta) {
                            if (full.bounce_flag === 'N') {
                                if (full.email_subscription_status === 'U') {
                                    return '<span class="white-bg-tooltip tooltips" ng-mouseover="showHoverTooltipForEllipsisOnly(\'b_em1' + full.id + '\' ,' + "'col4'" + ',' + "'dataTable'" + ',' + "''" + ')"><img src="image/mail_error.png"  width="20" height="20">' +
                                        '<a class="emailEllipsis buyername1"  ng-click="sendSubscribeEmail(\'' + full.b_em + '\');">' +
                                        '<span class="dataTableTooltip"><span class="tooltiptexts dataTableTooltipTxt" style="width:max-content !important">' +
                                        '<span style="line-height: 19px;font-size:15px;white-space: pre-line;">' + full.b_em + '</span>' +
                                        '</span></span><span id="b_em1' + full.id + '"' + '>'
                                        + "(Unsubscribed) " + full.b_em +
                                        '</span></a></span>';
                                } else {
                                    return '<span class="white-bg-tooltip tooltips" ng-mouseover="showHoverTooltipForEllipsisOnly(\'b_em2' + full.id + '\' ,' + "'col4'" + ',' + "'dataTable'" + ',' + "''" + ')">' +
                                        '<a class="emailEllipsis buyername"  ng-click="sendindividualpush(\'' + full.id + '\' ,' + "'mail'" + ');">' +
                                        '<span class="dataTableTooltip"><span class="tooltiptexts dataTableTooltipTxt" style="width:max-content !important">' +
                                        '<span style="line-height: 19px;font-size:15px;white-space: pre-line;">' + full.b_em + '</span>' +
                                        '</span></span><span id="b_em2' + full.id + '"' + '>'
                                        + full.b_em +
                                        '</span></a></span>';
                                }
                            } else {
                                return '<span class="white-bg-tooltip tooltips" ng-mouseover="showHoverTooltipForEllipsisOnly(\'b_em3' + full.id + '\' ,' + "'col4'" + ',' + "'dataTable'" + ',' + "'bounceprgm'" + ')">' +
                                    '<a class="emailEllipsis buyername1"  ng-click="showemailerror(\'' + meta.row + '\',\'' + full.bounce_flag + '\',\'' + data + '\',' + '$event' + ',\'' + full.id + '\');"><img src="image/mail_error.png"  width="20" height="20">' +
                                    '<span class="dataTableTooltip" ><span class="tooltiptexts dataTableTooltipTxt" style="width:max-content !important">' +
                                    '<span style="line-height: 19px;font-size:15px;white-space: pre-line;">' + full.b_em + '</span>' +
                                    '</span></span><span id="b_em3' + full.id + '"' + '>' +
                                    "(" + full.type + ") " + full.b_em +
                                    '</span></a></span>';
                            }
                        }),

                DTColumnBuilder.newColumn('p_b_dt').withTitle('<span>Birthday</span>').withClass('col5'),
                DTColumnBuilder.newColumn('p_age').withTitle('<span>Age</span>').withClass('col6'),
                DTColumnBuilder.newColumn('rank_status').withTitle('<span>Rank</span>').withClass('col7').renderWith(
                        function (data, type, full) {
                            if (full.m_s == "R" || full.m_s == "P") {
                                 if(data == ''){
                                    return '<a class="buyername" ng-click="getRankDetails('+ "'R'" + ',' + full.m_id + ',' + full.id + ',' + '$event' + ');">' + 'None' + '</a>';
                                }else{
                                    return '<a class="buyername" ng-click="getRankDetails('+ "'R'" + ',' + full.m_id + ',' + full.id + ',' + '$event' + ');">' + full.rank_status + '</a>';
                                }
                            } else {
                                if(data == ''){
                                     return '<a>' + 'None' + '</a>';
                                }else{
                                     return '<a>' + full.rank_status + '</a>';
                                }
                            }
                        }),
                DTColumnBuilder.newColumn('total_skill').withTitle('<span>Skills Progress</span>').withClass('col7').renderWith(
                        function (data, type, full) {
                            var skill_obj={};
                            skill_obj={"completed_skill":full.completed_skill,"total_skill":data};
                            var skill_json_obj = window.btoa(JSON.stringify(skill_obj));
                            if(data>0){
                                return '<a class="skills_progress" data-skill="'+skill_json_obj+'" ng-click="skillsProgressPopup('+ full.id + ',' + full.c_id + ',' +'$event)">'+ full.completed_skill + ' of ' + data + '</a>';
                            }else{
                                return '<a class="skills_progress"></a>';
                            }
                        }),
                DTColumnBuilder.newColumn('l_adv').withTitle('<span>Last Advanced</span>').withClass('col8').renderWith(
                        function (data, type, full) {
                            if (data == '0')
                                return 'Today';
                            else if (data == '1')
                                return (data) + ' day ago';
                            else if (parseInt(data) > 1)
                                return (data) + ' days ago';
                            else
                                return '';
                        }),
                        
                    DTColumnBuilder.newColumn('l_att').withTitle('<span>Last Attendance</span>').withClass('col9').renderWith(
                            function (data, type, full) {
                                if (full.l_att == '0') {
                                    return 'Today';
                                } else if (full.l_att == '1') {
                                    return (data) + ' day ago';
                                } else if (parseInt(data) > 1) {
                                    return (data) + ' days ago';
                                } else {
                                    return '';
                                }
                            }),
                    DTColumnBuilder.newColumn('attendance_limit').withTitle('<span>Attendance Limits</span>').withClass('col9').renderWith(
                            function (data, type, full) {
                                return full.attendance_limit;
                            }),
                DTColumnBuilder.newColumn('att_req').withTitle('<span>Attendance count</span>').withClass('col10').renderWith(
                        function (data, type, full) {
                            if ((data == "0" || data == "") && full.act_att > 0)
                                return full.act_att + ' total';
                            else if (data > 0)
                                return full.act_att + ' out of ' + (data);
                            else
                                return '';
                        }),
                DTColumnBuilder.newColumn('14_att').withTitle('<span>Attendance Last 14 Days</span>').withClass('col18'),
                DTColumnBuilder.newColumn('30_att').withTitle('<span>Attendance Last 30 Days</span>').withClass('col18'),
                DTColumnBuilder.newColumn('m_rg_ty_us').withTitle('<span>Registration Method</span>').withClass('col12'),
                DTColumnBuilder.newColumn('membership_source_name').withTitle('<span>Source</span>').withClass('col9').renderWith(
                        function (data, type, full) {
                            if (data) {
                                return '<span class="prgmTitleNameEllipsis white-bg-tooltip tooltips" ng-mouseover="showHoverTooltipForEllipsisOnly(\'m_source' + full.id + '\' ,' + "'col9'" + ',' + "'dataTable'" + ',' + "''" + ')"><span class="dataTableTooltip"><span class="tooltiptexts dataTableTooltipTxt">' +
                                        '<span style="line-height: 19px;font-size:15px;white-space: pre-line;">' + full.membership_source_name + '</span></span>' +
                                        '</span><span id="m_source' + full.id + '"' + '>' + full.membership_source_name +
                                        '</span></span>';
                            } else {
                                return '';
                            }
                        }),
                DTColumnBuilder.newColumn('paid_marketing_id').withTitle('<span>Paid Marketing ID</span>').withClass('col12'),
                DTColumnBuilder.newColumn('t').withTitle('<span>Membership</span>').withClass('col13').notSortable().renderWith(
                        function (data, type, full) {
                            return '<span class="prgmTitleNameEllipsis white-bg-tooltip tooltips" ng-mouseover="showHoverTooltipForEllipsisOnly(\'t' + full.id + '\' ,' + "'col13'" + ',' + "'dataTable'" + ',' + "''" + ')"><span class="dataTableTooltip"><span class="tooltiptexts dataTableTooltipTxt">' +
                                    '<span style="line-height: 19px;font-size:15px;white-space: pre-line;">' + full.t + '</span></span>' +
                                    '</span><span id="t' + full.id + '"' + '>' + full.t +
                                    '</span></span>';
                        }),
                DTColumnBuilder.newColumn('nt_py_dt').withTitle('<span>Next Payment Date</span>').withClass('col14').renderWith(function (data,type, full) {
                    if(full.m_s == 'Q'){
                        return "N/A";
                    }else{
                        return full.nt_py_dt;
                    }
                }),
                DTColumnBuilder.newColumn('nt_py_am').withTitle('<span>Next Payment Amount</span>').withClass('col17').renderWith(function (data, type, full) {
                    if(full.m_s == 'Q'){
                        return "N/A";
                    }else {
                        return  $scope.wp_currency_symbol + '' + data;
                    }   
                }),
                DTColumnBuilder.newColumn('past_due').withTitle('<span>Bill Past Due</span>').withClass('col16').renderWith(function (data, type, full) {
                    return  $scope.wp_currency_symbol + '' + data;
                }),
                DTColumnBuilder.newColumn('t').withTitle('<span>End Date</span>').withClass('col16').renderWith(
                        function (data, type, full) {
                            return '<span  data-toggle="tooltip" title="' + data + '" >' + full.end_date + '</span>';
                        }),
                DTColumnBuilder.newColumn('created_dt').withTitle('<span>Registration Date</span>').withClass('col_hold3'),
                DTColumnBuilder.newColumn('h_dt').withTitle('<span>Date Placed On Hold</span>').withClass('col_hold4'),
                DTColumnBuilder.newColumn('r_dt').withTitle('<span>Payment Resume Date</span>').withClass('col_hold5'),
                DTColumnBuilder.newColumn('m_s').withTitle('<span>Status</span>').withClass('col_can3').renderWith(
                function (data, type, full) {
                            if(data === 'R')
                        return 'Active';
                            else if(data === 'P')
                        return 'On Hold'
                        else if (data === 'C')
                        return 'Cancelled';
                        else if (data === 'Q')
                        return 'Pending';
                        else if (data === 'D')
                        return 'Deleted'    
                        else
                        return  'Completed';
                }),
                DTColumnBuilder.newColumn('m_rg_co_dt').withTitle('<span>Cancelled / Completed Date</span>').withClass('col4'),
                DTColumnBuilder.newColumn($rootScope.custom_field_title.par_custom_field_title_1).withTitle(`<span  class="" data-toggle="tooltip" title="${$rootScope.custom_field_title.par_custom_field_title_1}"> ${$rootScope.custom_field_title.par_custom_field_title_1} </span>`).withClass('new_home_col5 txt-ellipsis').withOption('visible', $rootScope.custom_field_title.par_custom_field_title_1 !== '' ? true : false).notSortable().
                        renderWith(function (data, type, full, meta) {
                            if (full.par_custom_field_value_1) {
                                return `<span  class="" data-toggle="tooltip" title="${full.par_custom_field_value_1}"> ${full.par_custom_field_value_1} </span>`;
                            } else {
                                return '<span  class="" data-toggle="tooltip" title=""></span>';
                            }
                        }),
                DTColumnBuilder.newColumn($rootScope.custom_field_title.par_custom_field_title_2).withTitle(`<span  class="" data-toggle="tooltip" title="${$rootScope.custom_field_title.par_custom_field_title_2}"> ${$rootScope.custom_field_title.par_custom_field_title_2} </span>`).withClass('new_home_col5 txt-ellipsis').withOption('visible', $rootScope.custom_field_title.par_custom_field_title_2 !== '' ? true : false).notSortable().
                        renderWith(function (data, type, full, meta) {
                            if (full.par_custom_field_value_2) {
                                return '<span  class="" data-toggle="tooltip" title="' + full.par_custom_field_value_2 + '" >' + full.par_custom_field_value_2 + '</span>';
                            } else {
                                return '<span  class="" data-toggle="tooltip" title=""></span>';
                            }
                        }),
                DTColumnBuilder.newColumn($rootScope.custom_field_title.par_custom_field_title_3).withTitle(`<span  class="" data-toggle="tooltip" title="${$rootScope.custom_field_title.par_custom_field_title_3}"> ${$rootScope.custom_field_title.par_custom_field_title_3} </span>`).withClass('new_home_col5 txt-ellipsis').withOption('visible', $rootScope.custom_field_title.par_custom_field_title_3 !== '' ? true : false).notSortable().
                        renderWith(function (data, type, full, meta) {
                            if (full.par_custom_field_value_3) {
                                return '<span  class="" data-toggle="tooltip" title="' + full.par_custom_field_value_3 + '" >' + full.par_custom_field_value_3 + '</span>';
                            } else {
                                return '<span  class="" data-toggle="tooltip" title=""></span>';
                            }
                        }),
                DTColumnBuilder.newColumn($rootScope.custom_field_title.par_custom_field_title_4).withTitle(`<span  class="" data-toggle="tooltip" title="${$rootScope.custom_field_title.par_custom_field_title_4}"> ${$rootScope.custom_field_title.par_custom_field_title_4} </span>`).withClass('new_home_col5 txt-ellipsis').withOption('visible', $rootScope.custom_field_title.par_custom_field_title_4 !== '' ? true : false).notSortable().
                        renderWith(function (data, type, full, meta) {
                            if (full.par_custom_field_value_4) {
                                return '<span  class="" data-toggle="tooltip" title="' + full.par_custom_field_value_4 + '" >' + full.par_custom_field_value_4 + '</span>';
                            } else {
                                return '<span  class="" data-toggle="tooltip" title=""></span>';
                            }
                        }),
                DTColumnBuilder.newColumn($rootScope.custom_field_title.par_custom_field_title_5).withTitle(`<span  class="" data-toggle="tooltip" title="${$rootScope.custom_field_title.par_custom_field_title_5}"> ${$rootScope.custom_field_title.par_custom_field_title_5} </span>`).withClass('new_home_col5 txt-ellipsis').withOption('visible', $rootScope.custom_field_title.par_custom_field_title_5 !== '' ? true : false).notSortable().
                        renderWith(function (data, type, full, meta) {
                            if (full.par_custom_field_value_5) {
                                return '<span  class="" data-toggle="tooltip" title="' + full.par_custom_field_value_5 + '" >' + full.par_custom_field_value_5 + '</span>';
                            } else {
                                return '<span  class="" data-toggle="tooltip" title=""></span>';
                            }
                        }),
                DTColumnBuilder.newColumn($rootScope.custom_field_title.par_custom_field_title_6).withTitle(`<span  class="" data-toggle="tooltip" title="${$rootScope.custom_field_title.par_custom_field_title_6}"> ${$rootScope.custom_field_title.par_custom_field_title_6} </span>`).withClass('new_home_col5 txt-ellipsis').withOption('visible', $rootScope.custom_field_title.par_custom_field_title_6 !== '' ? true : false).notSortable().
                        renderWith(function (data, type, full, meta) {
                            if (full.par_custom_field_value_6) {
                                return '<span  class="" data-toggle="tooltip" title="' + full.par_custom_field_value_6 + '" >' + full.par_custom_field_value_6 + '</span>';
                            } else {
                                return '<span  class="" data-toggle="tooltip" title=""></span>';
                            }
                        }),
                DTColumnBuilder.newColumn($rootScope.custom_field_title.par_custom_field_title_7).withTitle(`<span  class="" data-toggle="tooltip" title="${$rootScope.custom_field_title.par_custom_field_title_7}"> ${$rootScope.custom_field_title.par_custom_field_title_7} </span>`).withClass('new_home_col5 txt-ellipsis').withOption('visible', $rootScope.custom_field_title.par_custom_field_title_7 !== '' ? true : false).notSortable().
                        renderWith(function (data, type, full, meta) {
                            if (full.par_custom_field_value_7) {
                                return '<span  class="" data-toggle="tooltip" title="' + full.par_custom_field_value_7 + '" >' + full.par_custom_field_value_7 + '</span>';
                            } else {
                                return '<span  class="" data-toggle="tooltip" title=""></span>';
                            }
                        }),
                DTColumnBuilder.newColumn($rootScope.custom_field_title.par_custom_field_title_8).withTitle(`<span  class="" data-toggle="tooltip" title="${$rootScope.custom_field_title.par_custom_field_title_8}"> ${$rootScope.custom_field_title.par_custom_field_title_8} </span>`).withClass('new_home_col5 txt-ellipsis').withOption('visible', $rootScope.custom_field_title.par_custom_field_title_8 !== '' ? true : false).notSortable().
                        renderWith(function (data, type, full, meta) {
                            if (full.par_custom_field_value_8) {
                                return '<span  class="" data-toggle="tooltip" title="' + full.par_custom_field_value_8 + '" >' + full.par_custom_field_value_8 + '</span>';
                            } else {
                                return '<span  class="" data-toggle="tooltip" title=""></span>';
                            }
                        }),
                DTColumnBuilder.newColumn($rootScope.custom_field_title.par_custom_field_title_9).withTitle(`<span  class="" data-toggle="tooltip" title="${$rootScope.custom_field_title.par_custom_field_title_9}"> ${$rootScope.custom_field_title.par_custom_field_title_9} </span>`).withClass('new_home_col5 txt-ellipsis').withOption('visible', $rootScope.custom_field_title.par_custom_field_title_9 !== '' ? true : false).notSortable().
                        renderWith(function (data, type, full, meta) {
                            if (full.par_custom_field_value_9) {
                                return '<span  class="" data-toggle="tooltip" title="' + full.par_custom_field_value_9 + '" >' + full.par_custom_field_value_9 + '</span>';
                            } else {
                                return '<span  class="" data-toggle="tooltip" title=""></span>';
                            }
                        }),
                DTColumnBuilder.newColumn($rootScope.custom_field_title.par_custom_field_title_10).withTitle(`<span  class="" data-toggle="tooltip" title="${$rootScope.custom_field_title.par_custom_field_title_10}"> ${$rootScope.custom_field_title.par_custom_field_title_10} </span>`).withClass('new_home_col5 txt-ellipsis').withOption('visible', $rootScope.custom_field_title.par_custom_field_title_10 !== '' ? true : false).notSortable().
                        renderWith(function (data, type, full, meta) {
                            if (full.par_custom_field_value_10) {
                                return '<span  class="" data-toggle="tooltip" title="' + full.par_custom_field_value_10 + '" >' + full.par_custom_field_value_10 + '</span>';
                            } else {
                                return '<span  class="" data-toggle="tooltip" title=""></span>';
                            }
                        })

            ];
            $scope.dtInstance = {};
                }
            $scope.programs_filter = false;
            angular.element('body').on('search.dt', function () {
                $scope.searchTerm = document.querySelector('.dataTables_filter input').value.trim();
                $scope.selected = {};
            });

        };
        
      $scope.hidecol = function(){
               var table = $('#DataTables_Table_0').DataTable();
                    table.column(10).visible(true);
                    table.column(11).visible(true);
                    table.column(12).visible(true);
                    table.column(13).visible(true);
                    table.column(14).visible(true);
                    table.column(15).visible(true);
                    table.column(19).visible(true);
                    table.column(20).visible(true);
                    table.column(22).visible(true);
                    table.column(23).visible(true);
                    table.column(24).visible(true);
                    table.column(25).visible(true);
                    table.column(26).visible(true);
                    table.column(27).visible(true);
                if ($scope.current_tab.includes('R') && $scope.current_tab.length == '1') {
                    table.column(24).visible(false);
                    table.column(25).visible(false);
                    table.column(27).visible(false);
                }else if($scope.current_tab.includes('P') && $scope.current_tab.length == '1'){
                    table.column(10).visible(false);
                    table.column(12).visible(false);
                    table.column(13).visible(false);
                    table.column(14).visible(false);
                    table.column(15).visible(false);
                    table.column(17).visible(false);
                    table.column(18).visible(false);
                    table.column(25).visible(false);
                    table.column(19).visible(false);
                    table.column(20).visible(false);
                    table.column(27).visible(false);
                } else if($scope.current_tab.includes('C') && $scope.current_tab.length == '1'){
                    table.column(10).visible(false);
                    table.column(12).visible(false);
                    table.column(13).visible(false);
                    table.column(14).visible(false);
                    table.column(15).visible(false);
                    table.column(19).visible(false);
                    table.column(20).visible(false);
                    table.column(22).visible(false);
                    table.column(23).visible(false);
                    table.column(24).visible(false);
                    table.column(25).visible(false);
                }else if ($scope.current_tab.includes('R','P') && $scope.current_tab.length == '2') {
                     table.column(25).visible(false);
                     table.column(27).visible(false);
                }else if ($scope.current_tab.includes('P','C') && $scope.current_tab.length == '2') {
                    table.column(10).visible(false);
                    table.column(12).visible(false);
                    table.column(13).visible(false);
                    table.column(14).visible(false);
                    table.column(15).visible(false);
                    table.column(19).visible(false);
                    table.column(20).visible(false);
                }else if($scope.current_tab.includes('R','C')&& $scope.current_tab.length == '2'){
                    table.column(24).visible(false);
                    table.column(25).visible(false);
                }else if($scope.current_tab.includes('D') && $scope.current_tab.length == '1'){
                    table.column(10).visible(false);
                    table.column(12).visible(false);
                    table.column(13).visible(false);
                    table.column(14).visible(false);
                    table.column(15).visible(false);
                    table.column(19).visible(false);
                    table.column(20).visible(false);
                    table.column(22).visible(false);
                    table.column(23).visible(false);
                    table.column(24).visible(false);
                    table.column(25).visible(false);
                    table.column(27).visible(false);
                }else if($scope.current_tab.includes('R','D')&& $scope.current_tab.length == '2'){
                    table.column(24).visible(false);
                    table.column(25).visible(false);
                    table.column(27).visible(false);
                }else if($scope.current_tab.includes('C','D')&& $scope.current_tab.length == '2'){
                    table.column(10).visible(false);
                    table.column(12).visible(false);
                    table.column(13).visible(false);
                    table.column(14).visible(false);
                    table.column(15).visible(false);
                    table.column(19).visible(false);
                    table.column(20).visible(false);
                    table.column(22).visible(false);
                    table.column(23).visible(false);
                    table.column(24).visible(false);
                    table.column(25).visible(false);
                }else if($scope.current_tab.includes('P','D')&& $scope.current_tab.length == '2'){
                    table.column(10).visible(false);
                    table.column(12).visible(false);
                    table.column(12).visible(false);
                    table.column(14).visible(false);
                    table.column(15).visible(false);
                    table.column(19).visible(false);
                    table.column(20).visible(false);
                    table.column(27).visible(false);
                } 
                else if($scope.current_tab.includes('Q') && $scope.current_tab.length == '1'){
                    table.column(19).visible(false);
                    table.column(20).visible(false);
                }
            var n = 28;
            for (var value in  $rootScope.custom_field_title) {
                if ($rootScope.custom_field_title[value]) {
                    table.column(n).visible(true);
                } else {
                    table.column(n).visible(false);
                }
                n = n + 1;
            }
        };
           $scope.toggleAll = function (selectAll, selectedItems) {
                $scope.selectedData = [];
                 $scope.color_green='N';
                 $scope.all_select_flag = $rootScope.all_select_flag_email = 'N';
                 $rootScope.email_unselected_ids = [];
                 $scope.email_unselected_list = false;
                 $scope.mass_rank.selected_next_rank_count = 0;
                 $scope.selected_resend_invite_count = 0;
                 
                 if($scope.total_receipients == 0){
                    $scope.selectAll = false;
                    return false;
                 }
                if($scope.membershiplistcontents.length > 0){
                    for (var id in selectedItems) {
                        if (selectedItems.hasOwnProperty(id)) {
                            selectedItems[id] = selectAll;
                            if(selectAll!==false){
                                $scope.all_select_flag='Y';
                                $scope.color_green='Y';
                                $scope.email_unselected_list = true;
                                $scope.mass_rank.selected_next_rank_count = $scope.mass_rank.total_next_rank_count;
                                $scope.selected_resend_invite_count = $scope.total_resend_invite_count;
                            }
                        }
                    }
                    $rootScope.all_select_flag_email = $scope.all_select_flag;
                    $rootScope.email_selected_ids =$scope.selectedData;
                    $scope.selectCount = $scope.total_receipients;
                    $scope.maintainselected = selectedItems;
                    if($scope.all_select_flag == 'Y' && $scope.total_receipients == 1){
                        $scope.show_del_flag = 'Y';
                    }else{
                        $scope.show_del_flag = 'N';
                    }
                }
            };
          
           $scope.toggleOne= function (selectedItems, selected_id) {
            var index;
            $scope.selectCount = 0;
               $scope.maintainselected = selectedItems;
                  $scope.all_select_flag = $rootScope.all_select_flag_email = "N";
                   $scope.color_green='N';
                   var selectedData = angular.copy($scope.selectedData);
                   var email_unselected_ids = angular.copy($scope.email_unselected_ids);
                $scope.selectedData = [];
                $rootScope.email_unselected_ids = [];
               
                for (var id in selectedItems) {
                    if (selectedItems.hasOwnProperty(id)) {
                        index = $scope.membershiplistcontents.findIndex(obj => obj.id == id);
                        if (!selectedItems[id]) {
                            if($scope.email_unselected_list){
                                if(email_unselected_ids.findIndex(obj => obj.id ==  id) == -1){
                                    email_unselected_ids.push({"id": id});
                                }                            
                            } 

                        if(selectedData.length > 0 &&  selectedData.findIndex(obj => obj.id ==  id) > -1){
                            selectedData.splice(selectedData.findIndex(obj => obj.id ==  id), 1);
                        }
                        }else{
                            if(selectedData.findIndex(obj => obj.id ==  id) == -1){
                                selectedData.push({"id":id});
                                }
                            if(email_unselected_ids.length > 0 && email_unselected_ids.findIndex(obj => obj.id ==  id) > -1){
                                email_unselected_ids.splice(email_unselected_ids.findIndex(obj => obj.id ==  id), 1);
                            }
                            $scope.color_green='Y';
                        }
                    }
                }
                if($scope.selectedprogram == 'P'){
                    var selected_index = $scope.membershiplistcontents.findIndex(obj => obj.id == selected_id);
                    if($scope.membershiplistcontents[selected_index].next_rank_flag == 'Y'){
                        if(!selectedItems[selected_id]){
                            $scope.mass_rank.selected_next_rank_count = $scope.mass_rank.selected_next_rank_count - 1;
                        }else{
                            $scope.mass_rank.selected_next_rank_count = $scope.mass_rank.selected_next_rank_count + 1;
                        }
                    }
                    
                    if($scope.membershiplistcontents[selected_index].m_s == 'Q'){
                        if(!selectedItems[selected_id]){
                            $scope.selected_resend_invite_count = $scope.selected_resend_invite_count - 1;
                        }else{
                            $scope.selected_resend_invite_count = $scope.selected_resend_invite_count + 1;
                        }
                    }
                }
                
                $scope.selectedData = selectedData;
                $rootScope.email_unselected_ids = email_unselected_ids;

               if($scope.total_program_records == $scope.selectedData.length || ($scope.email_unselected_list && $rootScope.email_unselected_ids.length <= 0)){
                    $scope.selectAll = true;
                    $scope.all_select_flag = $rootScope.all_select_flag_email = 'Y';
                    $rootScope.email_unselected_ids = $scope.selectedData = [];
                    $scope.email_unselected_list = true;
                }else{
                    $scope.selectAll = false;
                    $scope.all_select_flag = $rootScope.all_select_flag_email = "N";
                }
                $rootScope.email_selected_ids =$scope.selectedData;
                $scope.deleteIconShowingCondition();
                $scope.selectedCountCalculation();
            }
            
            
           
            $scope.showName = function(full,page) {
                $rootScope.reg_participant_details = {};
                $rootScope.reg_participant_details.profile_img = './image/camera_dp.png';
                $localStorage.is_misc_flag = 'N';
                $localStorage.currentMembershipregid = full;
                $localStorage.manage_page_from = "";
                $localStorage.page_from = 'members_'+page;
                $localStorage.memdetails = {};
                $localStorage.memdetails.temp_searchTerm = $scope.searchTerm;
                $localStorage.memfilterdetails = {};
                $localStorage.memfilterdetails.filter_details = $rootScope.filter_details; // here filter details (based on generated list) is stored into localstorage for internal page redirection
                $localStorage.memfilterdetails.filter_options = $rootScope.filter_options;  // here filter options (based on generated list) is stored into localstorage for internal page redirection
                $localStorage.memfilterdetails.selected_filter_details = $rootScope.selected_filter_details; // here selected_filter_details variable is stored into localstorage for internal page redirection
                $localStorage.memfilterdetails.selected_filter_options = $rootScope.selected_filter_options;// here selected_filter_options variable is stored into localstorage for internal page redirection
                if (page == "pending_migration") {
                    $localStorage.migration_flag = "Y";
                }else{
                    $localStorage.migration_flag = "N";
                }
                if($scope.setPaginationDetails('participant')){
                    $location.path('/membershipdetail');
                }
            }; 

            $scope.redirectToSpos = function(reg_id,mem_id,m_op_id){
                console.log("redirect .. ",reg_id,mem_id,m_op_id);
                $('#progress-full').show();
                $http({
                    method: 'POST',
                    url: urlservice.url + 'generateOperatorPOSToken',
                    data: {
                        "company_id": $localStorage.company_id,
                        "student_id": $localStorage.student_id,
                        "user_email": $localStorage.loginDetails.user_email 
                    },
                    headers: {
                        "Content-Type": 'application/json; charset=utf-8',
                    },
                    withCredentials: true
                }).then(function (response) {
                     if (response.data.status == 'Success') {
                        $('#progress-full').hide();
                        $sessionStorage.user_access_type = $localStorage.loginDetails.user_type;
                        $sessionStorage.user_access_settings = response.data.user_access_settings;
                        $sessionStorage.membership_reg_id = reg_id;
                        $sessionStorage.currentPage = window.location.href;
                        $sessionStorage.user_email_id = $localStorage.loginDetails.user_email;
                        $sessionStorage.$apply();     
                        $scope.pos_token = response.data.token;
                        $scope.pos_user_type = 'spos';
                        $scope.pos_entry_type = 'l';
                        var hosturl="";
                        if (window.location.hostname === 'localhost') {
                            hosturl = 'http://' + window.location.hostname + '/nila/mystudio_webapp';
                        } else {
                            hosturl = 'https://' + window.location.hostname;
                        }
                        if($localStorage.device_type == 'native'){ 
                            var frame_link = `${hosturl}/m/?=${$localStorage.studio_code}/${$localStorage.loginDetails.company_id}/${mem_id}/${m_op_id}/${Math.floor(Date.now() / 1000)}/${$scope.pos_user_type}/${$scope.pos_token}/${$scope.pos_entry_type}/${$localStorage.op_user_device_id}/`;
                            window.open(frame_link, '_self');
                        }else{
                            window.open(`${hosturl}/m/?=${$localStorage.studio_code}/${$localStorage.loginDetails.company_id}/${mem_id}/${m_op_id}/${Math.floor(Date.now() / 1000)}/${$scope.pos_user_type}/${$scope.pos_token}/${$scope.pos_entry_type}//`, '_blank');
                           
                        } 
                    } else if (response.data.status === 'Expired') {
                        $('#progress-full').hide();
                        $("#messageModal").modal('show');
                        $("#messagetitle").text('Message');
                        $("#messagecontent").text(response.data.msg);
                        $scope.logout();
                    } else {
                        $('#progress-full').hide();
                        $scope.handleFailure(response.data);
                    }
                }, function (response) {
                    $('#progress-full').hide();
                    console.log(response.data);
                    $scope.handleError(response.data);
                });
                
            }

            $scope.showcustomerName = function(full,page,student_id,participant_id, buyer_type_ref,from) {
                $rootScope.reg_participant_details = {};
                $rootScope.reg_participant_details.profile_img = './image/camera_dp.png';
                $localStorage.is_misc_flag = 'N';
                $localStorage.currentMembershipregid = full;
                $localStorage.manage_page_from = "";
                $localStorage.page_from = 'members_'+page;
                $localStorage.memdetails = {};
                $localStorage.memdetails.temp_searchTerm = $scope.searchTerm;
                $localStorage.memfilterdetails = {};
                $localStorage.memfilterdetails.filter_details = $rootScope.filter_details; // here filter details (based on generated list) is stored into localstorage for internal page redirection
                $localStorage.memfilterdetails.filter_options = $rootScope.filter_options;  // here filter options (based on generated list) is stored into localstorage for internal page redirection
                $localStorage.memfilterdetails.selected_filter_details = $rootScope.selected_filter_details; // here selected_filter_details variable is stored into localstorage for internal page redirection
                $localStorage.memfilterdetails.selected_filter_options = $rootScope.selected_filter_options;// here selected_filter_options variable is stored into localstorage for internal page redirection
                if (page == "pending_migration") {
                    $localStorage.migration_flag = "Y";
                }else{
                    $localStorage.migration_flag = "N";
                }
                $scope.setPaginationDetails('customer',student_id,participant_id, buyer_type_ref,from)
            }; 

            $scope.openMemberPopDetails = function(data){
                $scope.openMigrationPopDetails(data,"MemberPop");
            } 
            $scope.openMigrationPopDetails = function(data,type){
                var item;
                for(var i =0;i<$scope.membershiplistcontents.length;i++)
                {
                    if(data == $scope.membershiplistcontents[i].id)
                    {
                        item = $scope.membershiplistcontents[i];
                    }
                }
                $scope.clearPopData();
                $scope.csv_import_type = 'add';
                
                if(item.hasOwnProperty('id')){
                    $scope.csv_import_type = 'update';
                }
                if(item.payment_frequency =="B")
                {
                    $scope.paymentFrequency = "Semi-monthly";
                }
                if(item.payment_frequency =="N")
                {
                    $scope.paymentFrequency = "None";
                }
                if(item.payment_frequency =="C")
                {
                    $scope.paymentFrequency = "Custom";
                    $scope.customFrequencyCount= item.custom_count;
                    $scope.optionType = item.custom_frequency == 'CW' ? 'Week(s)' : item.custom_frequency == 'CM' ? 'Month(s)' : item.custom_frequency == 'CY' ? 'Year(s)':'';
//                  $scope.optionType= item.custom_frequency;
                }
                if(item.payment_frequency =="A")
                {
                    $scope.paymentFrequency = "Annually";
                }
                if(item.payment_frequency =="M")
                {
                    $scope.paymentFrequency = "Monthly";
                }
                if(item.payment_frequency =="W")
                {
                    $scope.paymentFrequency = "Weekly";
                }
                var bName = item.b_na.split(",");
                var pName = item.p_na.split(",");                              
                $scope.buyerFname =bName[1].trim();
                $scope.buyerLname =bName[0].trim();
                $scope.membership_migration_id = item.id;
                $scope.batch_process_id = item.batch_process_id;
                $scope.buyerPhone = item.b_ph;
                $scope.buyerEmail =item.b_em;
                $scope.buyerAddress =item.participant_street;
                $scope.buyerCity =item.participant_city;
                $scope.buyerState =item.participant_state;
                $scope.buyerPcode =item.participant_zip;
                $scope.buyerCountry =item.participant_country;
                if(item.participant_fname_err == "Participant first name is Required")
                {
                    $scope.participantFname = '';
                }
                else
                {
                    $scope.participantFname =pName[1].trim();
                }
                if(item.participant_lname_err == "Participant last name is Required")
                {
                    $scope.participantLname = '';
                }
                else
                {
                    $scope.participantLname =pName[0].trim();
                }
                if($scope.activeMigrationTab == "E")
                {
                    $scope.buyer_fname_err = item.buyer_fname_err === ''? false : true;
                    $scope.buyer_lname_err = item.buyer_lname_err === ''? false : true;
                    $scope.buyer_phone_err = item.buyer_phone_err === ''? false : true;
                    $scope.buyer_email_err = item.buyer_email_err === ''? false : true;
                    $scope.buyer_address_err = item.buyer_address_err === ''? false : true;
                    $scope.buyer_city_err = item.buyer_city_err === ''? false : true;
                    $scope.buyer_state_err = item.buyer_state_err === ''? false : true;
                    $scope.buyer_postalcode_err = item.buyer_postalcode_err === ''? false : true;
                    $scope.buyer_country_err = item.buyer_country_err === ''? false : true;
                    $scope.participant_fname_err = item.participant_fname_err === ''? false : true;
                    $scope.participant_lname_err = item.participant_lname_err === ''? false : true;
                    $scope.participant_dob_err = item.participant_dob_err === ''? false : true;
                    $scope.membership_category_err = item.membership_category_err === ''? false : true;
                    $scope.membership_option_err = item.membership_option_err === ''? false : true;
                    $scope.membership_enddate_err = item.membership_enddate_err === ''? false : true;
                    $scope.payment_amount_err = item.payment_amount_err === ''? false : true;
                    $scope.payment_frequency_err = item.payment_frequency_err === ''? false : true;
                    $scope.custom_frequency_value_err = item.custom_frequency_value_err === ''? false : true;
                    $scope.custom_frequency_type_err = item.custom_frequency_type_err === ''? false : true;
                    $scope.tax_percentage_err = item.tax_percentage_err === ''? false : true;
                    $scope.processing_fee_err = item.processing_fee_err === ''? false : true;
                    $scope.next_payment_date_err = item.next_payment_date_err === ''? false : true;
                    $scope.last_payment_date_err = item.last_payment_date_err === ''? false : true;
                    $scope.payment_type_err = item.payment_type_err === ''? false : true;
                    $scope.card_payment_err = item.card_payment_err === ''? false : true;
                    $scope.participant_rank_err = item.participant_rank_err === ''? false : true;
                    $scope.attendance_limit_count_err = item.attendance_limit_count_err === ''? false : true;
                    $scope.attendance_limit_frequency_err = item.attendance_limit_frequency_err === ''? false : true;
                    $scope.no_of_classes_err = item.no_of_classes_err === ''? false : true;   
                    if(typeof item.p_dob != "undefined" && item.p_dob != "0000-00-00" && item.p_dob !="" && $scope.participant_dob_err == false)
                    {
                        var parsedDate = $.datepicker.parseDate('yy-mm-dd', item.p_dob);
                        $('#input_dob').datepicker('setDate', parsedDate);
                    }    
                    if(typeof item.next_pay_date != "undefined" && item.next_pay_date != "0000-00-00" && item.next_pay_date !=""  && $scope.next_payment_date_err == false)
                    {
                        var next_pay_date = $.datepicker.parseDate('yy-mm-dd', item.next_pay_date);
                        $('#input_nextPayDate').datepicker('setDate', next_pay_date);
                    }
                    if(typeof item.last_pay_date != "undefined" && item.last_pay_date != "0000-00-00" && item.last_pay_date !="" && $scope.last_payment_date_err == false)
                    {
                        var last_pay_date = $.datepicker.parseDate('yy-mm-dd', item.last_pay_date);
                        $('#input_lastPayDate').datepicker('setDate', last_pay_date);
                    }           
                    if(typeof item.mem_end_date != "undefined" &&  item.mem_end_date != "0000-00-00" && item.mem_end_date !="" && $scope.membership_enddate_err == false)
                    {
                        var mem_end_date = $.datepicker.parseDate('yy-mm-dd', item.mem_end_date);
                        $('#input_endDate').datepicker('setDate', mem_end_date);                
                    }  
                }
                else
                {
                    $scope.buyer_fname_err = false;
                    $scope.buyer_lname_err = false;
                    $scope.buyer_phone_err = false;
                    $scope.buyer_email_err = false;
                    $scope.buyer_address_err = false;
                    $scope.buyer_city_err = false;
                    $scope.buyer_state_err =false;
                    $scope.buyer_postalcode_err =false;
                    $scope.buyer_country_err = false;
                    $scope.participant_fname_err =false;
                    $scope.participant_lname_err = false;
                    $scope.participant_dob_err =false;
                    $scope.membership_category_err =false;
                    $scope.membership_option_err = false;
                    $scope.membership_enddate_err =false;
                    $scope.payment_amount_err =false;
                    $scope.payment_frequency_err = false;
                    $scope.custom_frequency_value_err = false;
                    $scope.custom_frequency_type_err =false;
                    $scope.tax_percentage_err =false;
                    $scope.processing_fee_err = false;
                    $scope.next_payment_date_err =false;
                    $scope.last_payment_date_err =false;
                    $scope.payment_type_err =false;
                    $scope.card_payment_err =false;
                    $scope.participant_rank_err =false;
                    $scope.attendance_limit_count_err = false;
                    $scope.attendance_limit_frequency_err = false;
                    $scope.no_of_classes_err =false;   
                    if(typeof item.p_dob != "undefined" && item.p_dob != "0000-00-00" && item.p_dob !="")
                    {
                        var parsedDate = $.datepicker.parseDate('yy-mm-dd', item.p_dob);
                        $('#input_dob').datepicker('setDate', parsedDate);
                    }    
                    if(typeof item.next_pay_date != "undefined" && item.next_pay_date != "0000-00-00" && item.next_pay_date !="" )
                    {
                        var next_pay_date = $.datepicker.parseDate('yy-mm-dd', item.next_pay_date);
                        $('#input_nextPayDate').datepicker('setDate', next_pay_date);
                    }
                    if(typeof item.last_pay_date != "undefined" && item.last_pay_date != "0000-00-00" && item.last_pay_date !="")
                    {
                        var last_pay_date = $.datepicker.parseDate('yy-mm-dd', item.last_pay_date);
                        $('#input_lastPayDate').datepicker('setDate', last_pay_date);
                    }           
                    if(typeof item.mem_end_date != "undefined" &&  item.mem_end_date != "0000-00-00" && item.mem_end_date !="")
                    {
                        var mem_end_date = $.datepicker.parseDate('yy-mm-dd', item.mem_end_date);
                        $('#input_endDate').datepicker('setDate', mem_end_date);                
                    }
                }
                var list=["input_pamount","input_tax_amount","input_first_name","input_last_name","input_phone","input_email","input_address","input_city","input_pcode","input_state","input_country","input_pfname","input_plname","input_dob",""]                              
               if($rootScope.project_key_name == 'codeninjas'){
                    $scope.paymentType= item.payment_method == 'CA' ? '' : item.payment_method;
               }else{
                    $scope.paymentType= item.payment_method == 'CA' ? 'Manual' : item.payment_method;
               }
                $scope.selectPaymentType($scope.paymentType,"update");
                $scope.card_last_four_digit= item.migration_last_four;
                $scope.attendanceLimit= item.attendance_limit;
                if($scope.attendanceLimit > 0){
                    $scope.classType= item.attendance_limit_frequency;
                    if($scope.classType == 'CPW'){
                        $scope.showClassType = "Classes per week";
                    }else if ($scope.classType == 'CPM'){
                        $scope.showClassType = "Classes per month";
                    }else{
                        $scope.showClassType = "None";
                    }
                }
                $scope.classPackage= "";
                $scope.isClass = false;
                if(typeof item.no_of_classes !="undefined" &&item.no_of_classes !=null && item.no_of_classes !="0")
                {
                    $scope.classPackage= item.no_of_classes; 
                    $scope.isClass =true;
                }
                $scope.paymentAmount= item.nt_py_am;
                $scope.taxAmount= item.tax_percentage;
                $scope.processing_fee_type = item.processing_fee_type;              
                if($scope.endDate != ""){
                    $scope.option = "Yes";
                }else{
                    if($scope.membership_enddate_err){
                        $scope.option = "Yes";
                    }else{
                        $scope.option = "No";
                    }
                }
                $scope.participantNote= item.participant_notes;
                if(typeof $scope.participantNote !="undefined" &&$scope.participantNote !=null && $scope.participantNote !="")
                {
                    $('#input_pnote').addClass('filled');
                    $('#input_pnote').parents('.input-box').addClass('focused');
                }
                $scope.isClarification = true;
                console.log(data);
                $scope.disableForm = true;
                $scope.isPendingSave = false;
                $scope.isProgramSave = false;
                if(typeof item.membership_id !="undefined" && item.membership_id != null && item.membership_id != "")
                {    
                    $scope.selectProgram(item.membership_id,item.m_c_t,'membership'); 
                }
                else
                {
                    $scope.selectedProgramName  = "";
                }
                if(typeof item.m_t !="undefined" && item.m_t != null && item.m_t != "")
                {      
                    $scope.selectProgram(item.membership_option_id,item.m_t,'membership_options')               
                }
                else
                {
                    $scope.selectedMembershipOptionName  = "";
                }
                $scope.selected_rank_name= item.rank_status;
                $scope.selected_rank_id = item.rank_id;             
                var custom_field_count = 1;
                for(var i=0;i<$scope.custom_title_list.length;i++)
                {
                    if(!$scope.custom_title_list[i].custom_field_view_flag){
                        $scope.custom_title_list[i].value = '';
                    }else{                      
                        $scope.custom_title_list[i].value = item['par_custom_field_value_'+custom_field_count];
                        custom_field_count++;
                    }                          
                    $scope.catchparticipantCustomInput($scope.custom_title_list[i].id,$scope.custom_title_list[i].parentId);                                        
                }        
                for(var i=0;i<list.length;i++)
                {
                    $('#' + list[i]).addClass('filled');
                    $('#' + list[i]).parents('.input-box').addClass('focused');
                }
                $scope.checkMigrationFormTwoFields();
                $scope.checkZero();
               
                $scope.isMembershipInfo = false;
                if(type == "MemberPop")
                {
                    $scope.isMembershipInfo = true;
                }
                $('#franchise_buyer_detail_modal').modal('show');
            }

            $scope.isClass = false;
            $scope.isClarification = false;
            
            $scope.openMigratedmemberPop = function ()
            {
            $('#migrate_to_member_modal').modal('hide');
            $('#progress-full').show();
            $http({
                method: 'POST',
                url: urlservice.url + 'moveToPendingMigration',
                data: {
                    "company_id": $localStorage.company_id,
                    "membership_migration_id": $scope.selectedData,
                    "search": $scope.searchTerm,
                    "unselected_ids" : $rootScope.email_unselected_ids.length > 0 ? $rootScope.email_unselected_ids : []
                },
                headers: {
                    "Content-Type": 'application/json; charset=utf-8',
                },
                withCredentials: true

            }).then(function (response) {
                if (response.data.status === 'Success') {
                    $('#progress-full').hide();
                    var total_count = parseInt(response.data.migration_list_count[0].active_count) + parseInt(response.data.migration_list_count[0].pending_count);
                    $scope.pendingCount = 0;
                    $scope.activeCount = 0;
                    $scope.showPendingMsg = false;
                    $scope.showActiveMsg = false;
                    if(parseInt(response.data.migration_list_count[0].pending_count) == total_count)
                    {
                        $scope.pendingCount = parseInt(response.data.migration_list_count[0].pending_count);
                        $scope.showPendingMsg = true;
                        $scope.showActiveMsg = false;
                    }
                    if(parseInt(response.data.migration_list_count[0].active_count) == total_count)
                    {
                        $scope.activeCount = parseInt(response.data.migration_list_count[0].active_count);
                        $scope.showPendingMsg = false;
                        $scope.showActiveMsg = true;
                    }
                    if(parseInt(response.data.migration_list_count[0].pending_count) >0 &&  parseInt(response.data.migration_list_count[0].pending_count)< total_count && parseInt(response.data.migration_list_count[0].active_count) >0 &&  parseInt(response.data.migration_list_count[0].active_count) < total_count)
                    {
                        $scope.pendingCount =parseInt(response.data.migration_list_count[0].pending_count);
                        $scope.showPendingMsg = true;
                        $scope.activeCount =parseInt(response.data.migration_list_count[0].active_count);
                        $scope.showActiveMsg = true;
                    }
                    $scope.resetSelectedVariables = true;
                    $('#DataTables_Table_0').DataTable()
                            .rows().invalidate('data')
                            .draw(false);
                    $('#migrated_member_modal').modal('show');
                } else if (response.data.status === 'Expired') {
                    console.log(response.data);
                    $('#progress-full').hide();
                    $("#messageModal").modal('show');
                    $("#messagetitle").text('Message');
                    $("#messagecontent").text(response.data.msg);
                    $scope.logout();
                } else {
                    $scope.handleFailure(response.data);
                }
            }, function (response) {
                console.log(response.data);
                $scope.handleError(response.data);
            });
          };

          $scope.openMigratedmemberModal = function ()
          {
          $('#migrate_to_member_modal').modal('hide');
          $('#progress-full').show();
          $http({
              method: 'POST',
              url: urlservice.url + 'moveMigrationRecords',
              data: {
                  "company_id": $localStorage.company_id,
                  "is_validation": 1,
                  "membership_migration_id": $scope.selectedData,
                  "search": $scope.searchTerm,
                  "unselected_ids" : $rootScope.email_unselected_ids.length > 0 ? $rootScope.email_unselected_ids : []
              },
              headers: {
                  "Content-Type": 'application/json; charset=utf-8',
              },
              withCredentials: true

          }).then(function (response) {
              if (response.data.status === 'Success') {
                  $('#progress-full').hide();
                  $scope.resetSelectedVariables = true;
                  $('#DataTables_Table_0').DataTable()
                          .rows().invalidate('data')
                          .draw(false);
                  $('#migrated_member_modal').modal('show');
              } else if (response.data.status === 'Expired') {
                  console.log(response.data);
                  $('#progress-full').hide();
                  $("#messageModal").modal('show');
                  $("#messagetitle").text('Message');
                  $("#messagecontent").text(response.data.msg);
                  $scope.logout();
              } else {
                  $scope.handleFailure(response.data);
              }
          }, function (response) {
              console.log(response.data);
              $scope.handleError(response.data);
          });
        };

          $scope.closeMigrateMemberPop = function()
          {
            if($scope.showPendingMsg == true)
            {
                $scope.openEMailPop();
            }
            else
            {
                $('#migrated_member_modal').modal('hide');
            }
          }
            $scope.openEMailPop = function()
            {
                $('#migrated_member_modal').modal('hide');
                $scope.mailType = "emailpop";
                if($scope.dontShowMigrationCheck == false)
                {
                    $("#migration-mail-pop").modal("show");      
                }    
                else
                {
                    $scope.openMigrateMailPop();
                }
            }
            $scope.showHelpPop = function(type)
            {
                if(type == "migration")
                {
                    $scope.migrationModalIdentifier.addnewmigratemodal = false;
                    $scope.openHelpPop(type);
                }
                if(type == "migrationPending")
                {
                    $("#add-csv-modal").modal("hide"); 
                    $scope.openHelpPop(type);
                }
                if(type == "migrationPendingCsv")
                {
                    $("#add-csv-modal").modal("hide"); 
                    $scope.openVideoHelpPop("migrationPendingCsv")
                }
                if(type == "migrationCsv")
                {
                    $("#addnewmigrate-modal").modal("hide"); 
                    $scope.openVideoHelpPop("migrationCsv")
                }
            }
          $scope.showemailerror = function (row, type, data, event, id) {
                $scope.email_updt = event.target;
                $scope.row=row;
                $scope.mem_id = id;
                $scope.btype=type;
                $scope.errormsg = $scope.membershiplistcontents[row].error;
                $scope.bouncedemail = data;
                $("#emailerrormessageModal").modal('show');
                $("#emailerrormessagetitle").text('Message');
                $("#emailerrormessagecontent").text($scope.errormsg);
            };
         

                                        
                                        
            $scope.actionlist = ['Cancel', 'Pause', 'Resume', 'Edit Payment Method', 'Edit Participant Name'];

            $scope.showedit = false;
            $scope.activemembershipdays = '5';
            $scope.editIndex = "";
            $scope.editSingle = $scope.parfirstname = $scope.parlastname = "";
            $scope.membership_reg_id = "";
            $localStorage.currentpage = "customers";
            $scope.wp_currency_symbol = $localStorage.wp_currency_symbol;
            $scope.pushmsgdata = '';
            $scope.activestartdate = '';
            $scope.holdstartdate = '';
            $scope.cancelstartdate = '';
            $scope.activeenddate = '';
            $scope.holdenddate = '';
            $scope.cancelenddate = '';
           
            $scope.also_send_email = false;
            $localStorage.buyerName = "";
            $localStorage.participantName = "";
            $localStorage.currentMembershipregid = ""; 
            $scope.maxEmailAttachmentSizeError = false;
            $scope.filepreview = ""; 
            $scope.attachfile = '';
            $scope.file_name = '';
            $scope.fileurl = '';
            $scope.data_loaded_length = 0;
            $scope.rankupdatestatus = false;
            $scope.registertypeselection='1';
            $scope.registertypechangeshow = false;
            $scope.registertypechangeshowattended=false;
             $scope.registertypechangeshowattended1 = false;
            
          
            
            
            $scope.removeAttachfile = function () {
                $scope.maxEmailAttachmentSizeError = false;
                $scope.filepreview = ""; 
                $scope.attachfile = '';
                $scope.file_name = '';
                $scope.fileurl = '';
            };

        $scope.backToMigratePop = function()
        {
            $('#addnewmigrate-modal').modal('hide');
            if($scope.csvUpload == "one")
            {
                $('#add-migrate-modal').modal('show');
            }
            if($scope.csvUpload == "two")
            {
                $('#add-csv-modal').modal('show');
            }
           
        }
        
        $scope.exportcheckedmembersexcel = function (type) {
            var response_type = '';
            var mass_rank_last_advance_date = '';
            
            if(type != 'mass_rank'){
                type = 'CSV';
                response_type = 'arraybuffer';
            };
            
            if(type == 'mass_rank' && $scope.selected_rankupdatedate != undefined){
                mass_rank_last_advance_date = $scope.selected_rankupdatedate;
            }else{
                mass_rank_last_advance_date = '';
            }
            
            var order = url_name = membership_days_type = '';
            var data = {};
            order = $('#DataTables_Table_0').DataTable().order();
            function formatTodayDate() {
                var d = new Date,
                        month = '' + (d.getMonth() + 1),
                        day = '' + d.getDate(),
                        year = d.getFullYear();

                if (month.length < 2)
                    month = '0' + month;
                if (day.length < 2)
                    day = '0' + day;

                return [year, month, day].join('-');
            }
            $scope.today_date = formatTodayDate();
            if ($localStorage.membershippagetype == 'pendingmigration') {
                url_name = 'createMemSelectonCSV';
                data = {
                    "company_id": $localStorage.company_id,
                    "selected_membership_list": $scope.selectedData,
                    "all_select_flag": $scope.all_select_flag,
                    "membership_status": $scope.current_tab,
                    "search": $scope.searchTerm,
                    "membership_migration_status": $scope.activeMigrationTab,
                    "email_unselected_ids": $rootScope.email_unselected_ids.length > 0 ? $rootScope.email_unselected_ids : []
                };
            } else {
                url_name = 'getFilterDetails';
                data = {
                    "company_id": $localStorage.company_id,
                    "selected_membership_list": $scope.selectedData,
                    "all_select_flag": $scope.all_select_flag,
                    "search": $scope.searchTerm,
                    "unselected_ids": $rootScope.email_unselected_ids ? $rootScope.email_unselected_ids : [],
                    "sort": order[0][0] ? order[0][0] : order[0],
                    "sort_type": order[0][1] ? order[0][1] : order[1],
                    "filter_id": $rootScope.filter_details.filter_id,
                    "filter_category": 'P', //P- program
                    "filter_type": 'AP', //All Participant
                    "filter_options": JSON.stringify($rootScope.filter_options),
                    "mass_rank_last_advance_date": mass_rank_last_advance_date,
                    "type": type
                };
            }
            $('#progress-full').show();
            if ($localStorage.user_login_type == 'O') { // Is this need for mass rank ?
                $scope.file_name = "Membership_" + $scope.today_date + ".csv";
                $rootScope.sendPostMessageToParent({"type": "export_csv",
                    "export_data": {
                        "url": urlservice.url + url_name,
                        "data": data,
                        "file_name": $scope.file_name
                    }});
                return false;
            }
            $http({
                method: 'POST',
                url: urlservice.url + url_name,
                responseType: response_type,
                data: data,
                headers: {
                    "Content-Type": 'application/json; charset=utf-8',
                },
                withCredentials: true
            }).then(function (response) {
                if(type == 'mass_rank'){
                    $('#progress-full').hide();
                    if(mass_rank_last_advance_date == ''){
                        $scope.mass_rank.next_rank_count = response.data.next_rank_count;
                        $scope.mass_rank.non_next_rank_count = response.data.non_next_rank_count;
                        $scope.mass_rank.update_rank = true;
                        $('#confirmMassRankModal').modal('show');
                    }else{
                        $scope.resetMassRank();
                        $("#errorMsgModal").modal('show');
                        $("#errorMsgContent").text(response.data.msg);
                    }
                }else{
                    $scope.clearSelectedList();

                    if ('TextDecoder' in window) {
                        // DECODE AS UTF-8
                        var response_content = '';
                        var dataView = new DataView(response.data);
                        var decoder = new TextDecoder('utf8');
                        if ($scope.isJson(decoder.decode(dataView)) === true) {
                            response_content = JSON.parse(decoder.decode(dataView));
                        }
                    } else {
                        // FALLBACK DECODE AS ASCII
                        var decodedString = String.fromCharCode.apply(null, new Uint8Array(response.data));
                        if ($scope.isJson(decodedString) === true) {
                            response_content = JSON.parse(decodedString);
                        }
                    }
                    if (response_content.status !== undefined && response_content.status === 'Failed') {
                        $('#progress-full').hide();
                        $("#pushmessageModal").modal('show');
                        $("#pushmessagetitle").text('Message');
                        $("#pushmessagecontent").text(response_content.msg);
                        return false;
                    } else {
                        $scope.clearSelectedList();
                        $('#progress-full').hide();
                        $("#cusmessageModal").modal('show');
                        $("#cusmessagetitle").text('Message');
                        $("#cusmessagecontent").text("Participant Details exported as csv file successfully.");
                    }
                    var msg = '';
                    var linkElement = document.createElement('a');
                    try {
                        var blob = new Blob([response.data], {type: "application/x-download"});
                        var objectUrl = URL.createObjectURL(blob);
                        linkElement.setAttribute('href', objectUrl);
                        linkElement.setAttribute("download", "Membership_" + $scope.today_date + ".csv");
                        var clickEvent = new MouseEvent("click", {
                            "view": window,
                            "bubbles": true,
                            "cancelable": false
                        });
                        linkElement.dispatchEvent(clickEvent);
                    } catch (ex) {
                        msg = ex;
                        console.log(ex);
                    }
                    if (msg === '') {
                        msg = "CSV file downloaded Successfully";
                    }
                    $scope.clearSelectedList();
                    $('#progress-full').hide();
                    $("#cusmessageModal").modal('show');
                    $("#cusmessagetitle").text('Message');
                    $("#cusmessagecontent").text(msg);
                }
            }), (function (response) {
                $('#progress-full').hide();
                $("#pushmessageModal").modal('show');
                $("#pushmessagetitle").text('Message');
                $("#pushmessagecontent").text("Unable to reach Server, Please Try again.");
            });
        };
            
            $scope.isJson = function (str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            };
            
            
            $scope.sendindividualpush = function (selectedMember, type,from) { // INDIVIDUAL PUSH MESSAGE
                $scope.clearfromindividual = true;
                $rootScope.receipients_reset_flag = true;
                $scope.message_type = type;
                $scope.selectAll = false;
                for (var id in  $scope.selected) {
                      $scope.selected[id] = false;
                }
                $scope.toggleAll(false,$scope.maintainselected);
                $scope.selectedData = [];
                $rootScope.email_selected_ids.push({"id":selectedMember});
                $scope.grpbuttonText = "Send";
                if ($localStorage.membershippagetype == 'pendingmigration') {
                    $rootScope.current_migration_tab = $scope.activeMigrationTab;
                } else {
                    $rootScope.current_migration_tab = '';
                }
                $rootScope.active_email_tab = $scope.current_tab;
                if (from == 'MG'){
                $rootScope.active_email_tab = "M";
                }
                $rootScope.email_from_template = "M"; 
                $rootScope.all_select_flag_email = "N"; 
                $rootScope.total_receipients = $scope.total_receipients;
                $rootScope.selected_days_type = $scope.membership_daystype;
                $rootScope.startdate_limit_email = $scope.membership_startdate_limit;
                $rootScope.enddate_limit_email = $scope.membership_enddate_limit;
                $rootScope.searchTerm_email = "";
                $rootScope.notattendeddays_mem = $scope.notattenedday;
                $rootScope.notattendeddays1_mem = $scope.notattenedday1;
                $rootScope.mem_registertype = $scope.registertype;
                $rootScope.filter_opt = JSON.stringify($rootScope.filter_options);
                $rootScope.filter_opt_category = 'P';
                $rootScope.filter_opt_type = 'AP';
                if (type === 'push') { 
                    $localStorage.page_from='push_msg'; 
                    $scope.openGlobalcomposeModal();
                } else {  
                    $rootScope.openNav_email('E');
                }
            };
            
            $scope.completeRegModal = function (){
                if($scope.mempendingcount == 0){
                    $('#resend-pending-invite-modal').modal('hide');
                }else{
                    $('#resend-pending-invite-modal').modal('hide');
                    $('#complete-registration-modal').modal('show');
                }
            }
            $scope.sendPendingRegistration =function(type){
                $('#complete-registration-modal').modal('hide');
                $('#sms-email-text-invitation').modal('hide');
                type == 'S' ? $scope.sms_flag = true : $scope.email_flag = true;  
            }
            $rootScope.sendToCustomerBack = function(){
                $scope.invite_from == 'S' ? $scope.sms_flag = false : $scope.email_flag = false;  
                $('#complete-registration-modal').modal('show');
            }
            $rootScope.sendToCustomerclose = function (){
                $scope.invite_from == 'S' ? $scope.sms_flag = false : $scope.email_flag = false;  
            }
            $rootScope.closesuccessmodal = function(){
                $('#sms-email-text-invitation').modal('hide');
                $scope.invite_from == 'S' ? $scope.sms_flag = false : $scope.email_flag = false;
            }
            $rootScope.confirmSendEmail = function(type,from){
                $rootScope.email_selected_ids = $scope.selectedData;
                $scope.invite_type = type;
                $scope.invite_from = from;
                $('#progress-full').show();
                data ={
                    "company_id": $localStorage.company_id,
                    "send_content": $scope.invite_from == 'S' ? $rootScope.sms_template_obj : $rootScope.email_template_obj,
                    "all_select_flag": $scope.all_select_flag,
                    "search": $scope.searchTerm,
                    "filter_options": JSON.stringify($rootScope.filter_options),
                    "selected_list": $rootScope.email_unselected_ids.length > 0 ? [] : $rootScope.email_selected_ids,
                    "unselected_ids": $rootScope.email_unselected_ids.length > 0 ? $rootScope.email_unselected_ids : [],
                    "type": type,
                    "from": from,
                    "user_id": $localStorage.loginDetails.user_id
                }     
                $http({
                    method: 'POST',
                    url: urlservice.url + 'checkSendtoCustomer',
                    data: data,
                    headers: {"Content-Type": 'application/json; charset=utf-8'},
                    withCredentials: true
                }).then(function (response) {
                    if (response.data.status == 'Success') {
                        $('#progress-full').hide();
                        if($scope.invite_type =='check'){
                            $scope.mempendingcount = response.data.count_reg;
                            $('#resend-pending-invite-modal').modal('show');
                        }else if($scope.invite_type =='send'){
                            if($scope.invite_from == 'S'){
                                $rootScope.smsConfirm(response.data.msg);
                                $rootScope.initializeEmailorSmsComponent('S');
                            } else {
                                $rootScope.emailConfirm(response.data.msg);
                                $rootScope.initializeEmailorSmsComponent('E');
                            }
                        }else if($scope.invite_type =='list'){
                            if($scope.invite_from == 'S' && $rootScope.has_sms_texting == false){
                                $('#complete-registration-modal').modal('hide');
                                $rootScope.enableSmsTexting();
                                return false;
                            }
                            $('#progress-full').hide();
                            $('#resend-pending-invite-modal').modal('hide');
                            $scope.par_name_list = response.data.list;
                            if($scope.par_name_list.length == 0){
                                $('#complete-registration-modal').modal('hide');
                                $('#sms-email-text-invitation').modal('hide');
                                $scope.invite_from == 'S' ? $scope.sms_flag = true : $scope.email_flag = true;
                            }else{
                                $('#complete-registration-modal').modal('hide');
                                $('#sms-email-text-invitation').modal('show');
                            }
                        }
                    } else if(response.data.status == 'Zeropending'){
                        $scope.mempendingcount = 0;
                        $('#resend-pending-invite-modal').modal('show');
                        $('#progress-full').hide();
                    }else if(response.data.status == 'Failed'){
                        $rootScope.emailConfirm(response.data.msg);
                        $('#progress-full').hide();
                    }else{
                        $('#progress-full').hide();
                    }  
                }, function (response) {
                    $('#progress-full').hide();
                    $scope.handleError(response.data);
                });
            };
            $rootScope.initializeEmailorSmsComponent = function (type) {
                var temp_url = $localStorage.loginDetails.company_code+'/'+$localStorage.loginDetails.company_id+"/";
                $scope.STC_invite_url = "https://" + window.location.hostname+"/m/?="+temp_url;
                if(type == 'E'){
                    if($('.send_reminders_dropdown').is(":visible")){
                        $('.send_reminders_dropdown').css('display','none');
                    }
                    $rootScope.email_template_obj={};
                    $rootScope.email_template_obj.interval_period = '';
                    $rootScope.email_template_obj.interval_type = '';
                    $rootScope.email_template_obj.checkbox_selected = 'N';
                    $rootScope.email_template_obj.attached_file = '';
                    $rootScope.email_template_obj.email_file_name = ''; 
                    $rootScope.email_template_obj.send_to_cust_type = 'E';
                    $rootScope.email_template_obj.subject_text = `View and complete your membership registration details with {{Studio_name}}`; 
                    $rootScope.email_template_obj.content_text = `<div>Hello from {{Studio_name}}! <br><br> Please click below to view the membership details and complete your registration <br><br>
                    <span contenteditable="false">
                    <span contentEditable="true"> </span><a class="appendclassforOP" href="${$scope.STC_invite_url}" target="_blank" ng-click="openevents('${$scope.STC_invite_url}')"><span contentEditable="true"></span>View and complete registration</a></span>   <br><br> Thank you, <br><br> {{Studio_name}}</div>`;
                    $rootScope.email_template_obj.invite_link = $scope.STC_invite_url; 
                }else{
                    if($('.send_sms_reminders_dropdown').is(":visible")){
                        $('.send_sms_reminders_dropdown').css('display','none');
                    }
                    $rootScope.sms_template_obj ={};
                    $rootScope.sms_template_obj.interval_period = '';
                    $rootScope.sms_template_obj.interval_type = '';
                    $rootScope.sms_template_obj.checkbox_selected = 'N';
                    $rootScope.sms_template_obj.send_to_cust_type = 'S';
                    $rootScope.sms_template_obj.attached_file = '';
                    $rootScope.sms_template_obj.email_file_name = '';
                    $rootScope.sms_template_obj.email_file_name = '';  
                    $rootScope.sms_template_obj.subject_text = '';
                    $rootScope.sms_template_obj.content_text = `Hello! Please view the membership details and complete your registration. ${$scope.STC_invite_url}`;
                    $rootScope.sms_template_obj.invite_link = $scope.STC_invite_url;
                } 
            };
            $scope.sendGroupMsg = function (type) { 
                $rootScope.from_conversation = 'N';
                $scope.message_type = type;
                $scope.grpbuttonText = "Send";
                if ($scope.selectedData.length > 0 || $scope.all_select_flag==='Y' || ((($rootScope.email_unselected_ids.length > 0) && ($scope.total_receipients - $rootScope.email_unselected_ids.length) > 0))) {
                    if($localStorage.membershippagetype == 'pendingmigration'){
                        $rootScope.current_migration_tab = $scope.activeMigrationTab;
                    }else{
                        $rootScope.current_migration_tab = '';
                    }
                    $rootScope.active_email_tab = $scope.current_tab;
                    $rootScope.all_select_flag_email = $scope.all_select_flag;
                    $rootScope.total_receipients = $scope.total_receipients;
                    $rootScope.email_selected_ids =$scope.selectedData; 
                    $rootScope.selected_days_type = $scope.membership_daystype;
                    $rootScope.startdate_limit_email = $scope.membership_startdate_limit;
                    $rootScope.enddate_limit_email = $scope.membership_enddate_limit;
                    $rootScope.searchTerm_email = $scope.searchTerm;
                    $rootScope.notattendeddays_mem = $scope.notattenedday;
                    $rootScope.notattendeddays1_mem = $scope.notattenedday1;
                    $rootScope.mem_registertype = $scope.registertype;
                    $rootScope.email_from_template = "M"; 
                    $rootScope.membership_ids_array = ($scope.selectedprogram == 'P' ? $scope.selectedmemId : []);
                    $rootScope.membership_option_ids_array = $scope.memOptionId;
                    $rootScope.filter_opt = JSON.stringify($rootScope.filter_options);
                    $rootScope.filter_opt_category = 'P';
                    $rootScope.filter_opt_type = 'AP';

                    if ($scope.message_type === 'push') { 
                        $localStorage.page_from='push_msg'; 
                        $scope.openGlobalcomposeModal();
                    } else if ($scope.message_type === 'mail') {
                        $rootScope.receipients_reset_flag = false;
                            if ((($scope.selectedData).length == 1) && $scope.selectAll == false) {
                                $rootScope.single_contact = 'Y';
                            } else {
                                $rootScope.single_contact = 'N';
                            }
                    $scope.getBounceAndUnsubContactsCount();
                    } else if ($scope.message_type === 'csv') {
                        $("#grpcsvdownloadModal").modal('show');
                        $("#grpcsvdownloadtitle").text('Message');
                        $("#grpcsvdownloadcontent").text('Do you want to download csv file for selected members?');
                    } else if($scope.message_type === 'mmail'){
                         if ($scope.membershiplistcontents.length > 0) {
                            $scope.selectedCountCalculation();
                       }
                        $('#openmsg').modal('show');
                } else if ($scope.message_type === 'automail') {
                    $('#openmsg').modal('hide');
                    $http({
                        method: 'POST',
                        url: urlservice.url + 'sendAutomationmailoractivatemember',
                        data: {
                            "company_id": $localStorage.company_id,
                            "mig_id": $scope.selectedData,
                            "all_select_flag": $scope.all_select_flag,
                            "search": $scope.searchTerm,
                            "for": "mail",
                            "email_unselected_ids": $rootScope.email_unselected_ids.length > 0 ? $rootScope.email_unselected_ids : [],
                            "membership_migration_status": $scope.activeMigrationTab
                        },
                        headers: {"Content-Type": 'application/json; charset=utf-8', },
                        withCredentials: true

                    }).then(function (response) {
                        if (response.data.status === 'Success') {
                            $('#progress-full').hide();
                            $("#campaign_modal").modal('show');
                            $("#campaign_modal_text").text(response.data.msg);
                        } else if (response.data.status === 'Version') {
                            $('#progress-full').hide();
                            $scope.handleFailure(response.data);
                        } else {
                            $('#progress-full').hide();
                            if($localStorage.readonlyuser == "Y"){
                                $scope.handleFailure(response.data);
                            }
                        }
                    }, function (response) {
                        console.log(response.data);
                        $scope.handleError(response.data);
                    });
                    }else if($scope.message_type === 'mdelete'){
                        $('#deletemigrationmessageModal').modal('show');
                           
                    }else if ($scope.message_type == 'migrate') {
                         //To check select all checkbox 
                        if ($scope.selectedData.length > 0 || $scope.all_select_flag === 'Y' || ($rootScope.email_unselected_ids.length > 0 && (($scope.total_receipients - $rootScope.email_unselected_ids.length) > 0))){
                                $('#migrate_to_member_modal').modal('show');
                        } 
                        else {
                            var x = document.getElementById("snackbar")
                            x.className = "show";
                            setTimeout(function () {
                                x.className = x.className.replace("show", "");
                            }, 3000);
                        }
                    }else if($scope.message_type === 'mass_rank'){
                        $scope.resetMassRank();
                        $scope.exportcheckedmembersexcel('mass_rank');
                    }
                } else {
                    var x = document.getElementById("snackbar")
                    x.className = "show";
                    setTimeout(function () {
                        x.className = x.className.replace("show", "");
                    }, 3000);
                }
            }
        $scope.deleteMigratedMember = function () {
            $('#progress-full').show();
            $http({
                method: 'POST',
                url: urlservice.url + 'deleteMigratedMember',
                data: {
                    "company_id": $localStorage.company_id,
                    "mig_id": $scope.selectedData,
                    "type": 'MM',
                    "all_select_flag": $scope.all_select_flag,
                    "search": $scope.searchTerm,
                    "email_unselected_ids": $rootScope.email_unselected_ids.length > 0 ? $rootScope.email_unselected_ids : [],
                    "membership_migration_status" : $scope.activeMigrationTab
                },
                headers: {"Content-Type": 'application/json; charset=utf-8', },
                withCredentials: true

            }).then(function (response) {
                if (response.data.status === 'Success') {
                    $('#progress-full').hide();
                    $scope.toggleAll(false, $scope.maintainselected);
                    $scope.selectAll = false;
                    $scope.resetSelectedVariables = true;
                    $('#DataTables_Table_0').DataTable()
                            .rows().invalidate('data')
                            .draw(false);
                    $("#campaign_modal").modal('show');
                    $("#campaign_modal_text").text(response.data.msg);
                } else if (response.data.status === 'Version') {
                    $('#progress-full').hide();
                    $scope.handleFailure(response.data);
                } else {
                    $('#progress-full').hide();
                    if($localStorage.readonlyuser == "Y"){
                        $scope.handleFailure(response.data);
                        return false;
                    }
                    console.log(response.data);
                }
            }, function (response) {
                console.log(response.data);
                $scope.handleError(response.data);
            });
        };

        $scope.mig_close = function (type) {
            $('#openmsg').modal('hide');
            $('#openmsg1').modal('hide');
            $('#openmsg2').modal('hide');
        }
        $scope.mig_open = function (type) {
            $scope.active_member_token = false;
            if (type == 5) {
                if ($scope.mapped_cc_id) {
                    angular.forEach($scope.selectedData, function (value, key) {
                        var exists = $scope.mapped_cc_id.some(function (item) {
                            return item.id.includes(value.id);
                        });
                        if (exists) {
                            $scope.active_member_token = true;
                        }
                    });
                }
            }
            $('#openmsg').modal('hide');
            $('#openmsg2').modal('hide');
            $('#openmsg1').modal('hide');
            $('#openmsg3').modal('hide');
            if ($scope.selectedData.length > 0 || $scope.all_select_flag === 'Y' || ($rootScope.email_unselected_ids.length > 0 && ($scope.total_receipients - $rootScope.email_unselected_ids.length > 0))) {
                if ($scope.active_member_token || ($scope.all_select_flag === 'Y' && $scope.mapped_cc_id.length > 0)) {
                    $('#openmsg3').modal('show');
                    return
                }
                if (type == 1) {
                    $('#openmsg2').modal('show');
                } else if (type == 2 || type == 3) {
                    if (type == 2) {
                        $scope.automatmated_email = 'Y';
                    } else {
                        $scope.automatmated_email = 'N';
                    }
                    $('#progress-full').show();
                    $http({
                        method: 'POST',
                        url: urlservice.url + 'sendAutomationmailoractivatemember',
                        data: {
                            "company_id": $localStorage.company_id,
                            "mig_id": $scope.selectedData,
                            "type": 'MM',
                            "all_select_flag": $scope.all_select_flag,
                            "search": $scope.searchTerm,
                            "automated_email": $scope.automatmated_email,
                            "email_unselected_ids": $rootScope.email_unselected_ids.length > 0 ? $rootScope.email_unselected_ids : [],
                            "membership_migration_status": $scope.activeMigrationTab

                        },
                        headers: {"Content-Type": 'application/json; charset=utf-8', },
                        withCredentials: true

                    }).then(function (response) {
                        if (response.data.status === 'Success') {
                            $('#progress-full').hide();
                            $scope.toggleAll(false, $scope.maintainselected);
                            $scope.selectAll = false;
                            $scope.resetSelectedVariables = true;
                            $('#DataTables_Table_0').DataTable()
                                    .rows().invalidate('data')
                                    .draw(false);
                            $("#campaign_modal").modal('show');
                            $("#campaign_modal_text").text(response.data.msg);
                        } else if (response.data.status === 'Version') {
                            $('#progress-full').hide();
                            $scope.handleFailure(response.data);
                        } else {
                            $('#progress-full').hide();
                            console.log(response.data);
                            if($localStorage.readonlyuser == "Y"){
                                $scope.handleFailure(response.data);
                            }
                        }
                    }, function (response) {
                        console.log(response.data);
                        $scope.handleError(response.data);
                    });

                } else {
                    $('#openmsg1').modal('show');
                }
            } else {
                var x = document.getElementById("snackbar")
                x.className = "show";
                setTimeout(function () {
                    x.className = x.className.replace("show", "");
                }, 3000);
            }
        }
                $scope.sendGroupEmailPush = function () {
                $('#progress-full').show();
                var msg,unsubscribe_email = '';
                var subject,unsubscribe_phone_no, subscription_type = '';
                if ($scope.message_type === 'push') {
                    if ($scope.grppushmsgdata.trim().length === 0) {
                        return;
                    }
                    subject = '';
                    msg = $scope.convertPushUrl($scope.grppushmsgdata);
                } else if ($scope.message_type === 'mail') {
                    if ($scope.grpemailmsgdata.trim().length === 0 || $scope.grpemailsubjectdata.trim().length === 0) {
                        return;
                    }
                    subject = $scope.grpemailsubjectdata;
                    msg = $scope.grpemailmsgdata;
                    
                    if($scope.attachfile !== '' && $scope.attachfile !== undefined && $scope.attachfile !== null){
                        $scope.fileurl = $scope.filepreview.substr($scope.filepreview.indexOf(",") + 1);
                        $scope.file_name = $scope.attachfile.split("fakepath")[1].substr(1);
                    }else{
                        $scope.fileurl = '';
                        $scope.file_name = '';
                    }
                }else if($scope.message_type === 'subscribe'){
                    subject = 'Subscribe to our email communications!';
                    msg = 'click here to subscribe';
                    unsubscribe_email = $scope.unsubscribe_email;
                }
                 
                $http({
                    method: 'POST',
                    url: urlservice.url + 'sendMembershipGroupPush',
                    data: {
                        "company_id": $localStorage.company_id,
                        "type": $scope.message_type,
                        "subject": subject,
                        "message": msg,
                        "also_send_mail": $scope.also_send_email ? 'Y' : 'N',
                        "selected_membership_list": $scope.selectedData,
                        "file_name": $scope.file_name,
                        "attached_file": $scope.fileurl,
                        "all_select_flag": $scope.all_select_flag,
                        "membership_status": $scope.current_tab,
                        "membership_days_type": $scope.membership_daystype,
                        "membership_startdate_limit": $scope.membership_startdate_limit,
                        "membership_enddate_limit": $scope.membership_enddate_limit,
                        "register_type": $scope.registertype,
                        "notattendeddays": $scope.notattenedday,
                        "notattendeddays1": $scope.notattenedday1,
                        "from":"homeMebership",
                        "search":$scope.searchTerm,
                        "unsubscribe_email":unsubscribe_email,
                        "user_id": $localStorage.loginDetails.user_id
                    },
                    headers: {
                        "Content-Type": 'application/json; charset=utf-8',},
                        withCredentials: true

                }).then(function (response) {
                    if (response.data.status === 'Success') { 
                        $("#sendsubscriptioninviteModal").modal('hide');
                        if (response.data.feature_available == false){     
                            $scope.clearSelectedList();
                            $('#progress-full').hide();
                            $("#grpemailmessagecontModal").modal('hide');
                            $("#grpemailmessageconttitle").text('');
                            $("#grppushmessagecontModal").modal('hide');
                            $("#grppushmessageconttitle").text('');                       
                            $("#upgrade_plan_for_feature_modal1").modal('show');
                            $("#upgrade_plan_for_feature_content1").text('Please upgrade your plan to proceed.');
                            return false;
                        }
                        if(response.data.bulkmail_count > -1){
                           $rootScope.bulkmail_count = $localStorage.bulkmail_count = response.data.bulkmail_count;
                        }
                        $scope.clearSelectedList();
                        $('#progress-full').hide();
                        $("#grpemailmessagecontModal").modal('hide');
                        $("#grpemailmessageconttitle").text('');
                        $("#grppushmessagecontModal").modal('hide');
                        $("#grppushmessageconttitle").text('');
                        $("#cusmessageModal").modal('show');
                        $("#cusmessagetitle").text('Message');
                        $("#cusmessagecontent").text(response.data.msg);
                    } else if (response.data.status === 'Expired') {
                        console.log(response.data);
                        $('#progress-full').hide();
                        $("#messageModal").modal('show');
                        $("#messagetitle").text('Message');
                        $("#messagecontent").text(response.data.msg);
                        $scope.logout();
                    } else if (response.data.status === 'Version') {
                        $('#progress-full').hide();
                        $scope.handleFailure(response.data);
                    } else{
                        if(response.data.msg == 'Access denied.') {
                             $('#progress-full').hide();
                             $scope.handleFailure(response.data);
                        }else{
                            $("#sendsubscriptioninviteModal").modal('hide');
                        console.log(response.data);
                        $scope.clearSelectedList();
                        $("#grpemailmessagecontModal").modal('hide');
                        $("#grpemailmessageconttitle").text('');
                        $("#grppushmessagecontModal").modal('hide');
                        $("#grppushmessageconttitle").text('');
                        $('#progress-full').hide();
                        $("#cusmessageModal").modal('show');
                        $("#cusmessagetitle").text('Message');
                        $("#cusmessagecontent").text(response.data.msg);
                        } 
                    }
                }, function (response) {
                    console.log(response.data);
                    $scope.handleError(response.data);
                });
            };
            $scope.matchmemberwithtokentable = function(type, from){
                var table = $('#DataTables_Table_0').DataTable();
                table.destroy();
                $scope.showTable = false;
                $scope.matchmemberwithtoken(type, from);
                 $scope.membershipmatchdtOptions
                    .withOption('stateLoadParams', function (settings, data) {
                        data.search.search = "";
                    });
            }
        $scope.matchmemberwithtoken = function (type, from) {
            var id = [];
            $scope.hidemembership = true;
            $scope.openmatchpayment = true;
            $scope.matchtable_first = true;
            $scope.matched_members = true;
           table_id_str = "#DataTables_Table_match_1";
            if (type == 'U') {
                $scope.matchtab = 'U';
                $scope.matched_members = false;
            } else if (type == 'M') {
                $scope.matchtab = 'M';
                $scope.matched_members = false;
                }else{
                     $scope.matchtab = 'A';
                }
            $(table_id_str).DataTable().draw(false);
            DTDefaultOptions.setLoadingTemplate('<div class="spinner-loader-full"></div>');

            $scope.membershipmatchdtOptions = DTOptionsBuilder.newOptions()
                    .withOption('ajax', {
                        url: urlservice.url + 'getMembershipPayementToken',
                        xhrFields: {
                            withCredentials: true
                        },
                        dataSrc: function (json) {
                            $scope.membershiplistcontents = json.data;
                            $scope.match_count = json.match_count;
                            $scope.token_count = json.token_count;
                            $scope.token_id = json.token_id;
                            $rootScope.total_receipients = $scope.total_receipients = json.recordsFiltered;
                            $scope.$apply();
                            return json.data;
                        },
                        type: 'POST',
                        dataType: 'json',
                        data: {
                            "company_id": $localStorage.company_id,
                            "current_tab": $scope.matchtab
                        },

                        error: function (xhr, error, thrown) {
                            if (xhr.responseJSON.status === "Failed") {
                                $('#progress-full').hide();
                                $("#failuremessageModal").modal('show');
                                $("#failuremessagetitle").text('Message');
                                $("#failuremessagecontent").text(xhr.responseJSON.msg);
                            } else if (xhr.responseJSON.status === 'Expired') {
                                $("#failuremessageModal").modal('show');
                                $("#failuremessagetitle").text('Message');
                                $("#failuremessagecontent").text(xhr.responseJSON.msg);
                                $scope.logout();
                            } else if (xhr.responseJSON.status === 'Version') {
                                $('#progress-full').hide();
                                $scope.handleFailure(xhr.responseJSON.msg);
                            } else {
                                $('#progress-full').hide();
                            }
                        }

                    })
                    .withOption('createdRow', function (row, data, dataIndex) {
                        // Recompiling so we can bind Angular directive to the DT
                        $compile(angular.element(row).contents())($scope);
                    })
                    .withOption('headerCallback', function (header) {
                        // Use this headerCompiled field to only compile header once
                        $scope.headerCompiled = true;
                        $compile(angular.element(header).contents())($scope);
                    })
                    .withDataProp('data')
                    .withDOM('lfrti')
                    .withScroller()
                    .withOption('deferRender', true)
                    .withOption('scrollY', 570)
                    .withOption('scrollX', '100%')
                    .withOption('fnPreDrawCallback', function () {
                        $('#progress-full').show();
                    })
                    .withOption('fnDrawCallback', function () {
                        $('#progress-full').hide();
                    })
                    .withOption('serverSide', true)
                    .withOption('destroy', true)
                    .withOption('searching', false)
                    .withOption('info', false)
                    .withOption('order', [0, 'desc'])

            $scope.membershipmatchdtColumns = [
                DTColumnBuilder.newColumn(null).withTitle('Pending Member Match').withClass('customer_name').renderWith(
                        function (data, type, full) {
                            if (full.id && $scope.matchtab == 'A') {
                                return '<div class="memberbuyername fulfilletxt" ng-click="matchmember(\'' + full.mig_id + '\',\'' + full.company_id + '\',\'' + full.cc_name + '\',\'' + full.card_id + '\',' + '$event' + ')"style="cursor:pointer; color: #009A61;font-style:normal;font-size:15px;line-height: 20px;font-weight:500">' + full.user + '</div>';
                            } else if (full.id && $scope.matchtab == 'M') {
                                return '<div class="memberbuyername fulfilletxt" style="color:black;font-size:15px;line-height: 20px;"  >' + '<img style="cursor:pointer; color: black;font-style:normal;font-size:15px;line-height: 20px;font-weight:500" src="image/plus_icon.png" ng-click="matchmember(\'' + full.mig_id + '\',\'' + full.company_id + '\',\'' + full.cc_name + '\',\'' + full.card_id + '\',' + '$event' + ')" class="membermatch_encircle" />&nbsp' + full.user + '</div>';
                            } else {
                                return '<div class="memberbuyername fulfilletxt"  ><a style="cursor:pointer; color: #d0021b; font-size:13.5px;line-height: 18.44px;font-weight:600px;" ng-click="matchmember(\'' + '' + '\',\'' + full.company_id + '\',\'' + full.cc_name + '\',\'' + full.card_id + '\',' + '$event' + ')">Unmatched: click here to match</a></div>';
                            }
                        }).notSortable(),
                DTColumnBuilder.newColumn('Date').withTitle('Payment Method Details').withClass('event_participant_name').renderWith(
                        function (data, type, full) {
                            return '<span class="fulfilletxt">' + full.cc_name + '</span>';
                        }).notSortable(),
                DTColumnBuilder.newColumn('Date').withTitle('Billing Email').withClass('event_participant_name').renderWith(
                        function (data, type, full) {
                            return '<span class="fulfilletxt">' + full.email + '</span>';
                        }).notSortable(),
                DTColumnBuilder.newColumn('Date').withTitle('Payment Method Owner').withClass('event_participant_name').renderWith(
                        function (data, type, full) {
                            return '<span class="fulfilletxt">' + full.user_name + '</span>';
                        }).notSortable(),
            ];
            $scope.dtInstance6 = {};
            $('#progress-full').hide();
        }
             
            $scope.closemembermatchview = function(){
                $scope.hidemembership = false;
                $scope.migrationDT = true;
                $scope.processmigration = false;
                $scope.openmatchpayment = false;
                $scope.showTable = false;
                $scope.showMigrateTable = false;
                $scope.matchtable_first = false;
                $scope.migration();
            }
            $scope.matchmemberwithpayment = function(){
                $('#showconfirmationtoken').modal('show');
            }


 $scope.matchuser = function(){
     $('#progress-full').show();
             let id = $scope.name.map(({ id }) => id);
            $http({
                    method: 'POST',
                    url: urlservice.url + 'updatePendingMemberwithCardlist',
                    data: {
                        "company_id": $localStorage.company_id,
                        "membership_id": id,
                        "card_id":$scope.card_id,
                        "type": "M"
                    },
                    headers: {
                        "Content-Type": 'application/json; charset=utf-8',
                    },
                    withCredentials: true
                   
                }).then(function (response) {
                    if (response.data.status === 'Success') {
                         $("#migratedmemberlist").modal('hide');
                         $scope.matchmemberwithtoken();
                    } else if (response.data.status === 'Expired') {
                        console.log(response.data);
                        $('#progress-full').hide();
                        $("#messageModal").modal('show');
                        $("#messagetitle").text('Message');
                        $("#messagecontent").text(response.data.msg);
                        $scope.logout();
                    } else {
                        $('#progress-full').hide();
                        $scope.handleFailure(response.data);
                    }
                }, function (response) {
                    console.log(response.data);
                    $scope.handleError(response.data);
                }); 
 }
 $scope.matchusersendtoqueue = function(){
     $('#progress-full').show();
      $http({
                    method: 'POST',
                    url: urlservice.url + 'updatePendingMemberwithCardlist',
                    data: {
                        "company_id": $localStorage.company_id,
                        "membership_id": '',
                        "card_id":$scope.token_id,
                        "type":"Q"
                    },
                    headers: {
                        "Content-Type": 'application/json; charset=utf-8',
                    },
                    withCredentials: true
                   
                }).then(function (response) {
                    if (response.data.status === 'Success') {
                      $('#progress-full').hide();
                         $("#migratedmemberconfirm").modal('show');
                    } else if (response.data.status === 'Expired') {
                        console.log(response.data);
                        $('#progress-full').hide();
                        $("#messageModal").modal('show');
                        $("#messagetitle").text('Message');
                        $("#messagecontent").text(response.data.msg);
                        $scope.logout();
                    } else {
                        $('#progress-full').hide();
                         $(table_id_str).DataTable()
                            .rows().invalidate('data')
                            .draw(false);
                        $scope.handleFailure(response.data);
                    }
                }, function (response) {
                    console.log(response.data);
                    $scope.handleError(response.data);
                }); 
 }
            $scope.catchuserchange = function(search_text){
                $scope.searchQuery = search_text;
                $scope.showmember=true;
            }
            $scope.clearSearchedUser = function(){
                $scope.search_text='';
                $scope.searchQuery='';
            }
            $scope.matchmember = function(id,company_id,cc_name,card_id,type,$event){
                let target = event.target;
                if (target.tagName == 'A' || target.tagName == 'SPAN' ||  target.tagName == 'IMG' ){
                $scope.matched_userlist = false; 
                $scope.matchbtn_show = false;
                $scope.name = [];
                $scope.search_text='';
                $scope.card_id = card_id;
                $scope.membermatch_array ='';
                $scope.matched_user='';
                $scope.matched_user_cp='';
                if(cc_name){
                    $scope.card_name= cc_name;
                }
                if(id && id !='undefined'){
                   $scope.mem_id = id;
                }else{
                    $scope.mem_id='';
                }
                 $('#progress-full').show();
                $scope.migratedmemberlist = [];
                $http({
                    method: 'POST',
                    url: urlservice.url + 'getAllmigratedmeberlist',
                    data: {
                        "company_id": $localStorage.company_id,
                        "membership_id": $scope.mem_id
                    },
                    headers: {
                        "Content-Type": 'application/json; charset=utf-8',
                    },
                    withCredentials: true
                   
                }).then(function (response) {
                    if (response.data.status === 'Success') {
                        $scope.membermatch_array = response.data.msg;
                        $scope.matched_user =response.data.matched_user;
                        $scope.matched_user_cp =response.data.matched_user;
                         angular.forEach($scope.matched_user, function (value, key) {
            
            if (id.includes(value.id)) {
                $scope.matched_userlist = true; 
                // SHOW THE EXTRACTED DATA.
                $scope.name.push({customer:value.customer,participant:value.participant,id:value.id});
             }
        });
        
                    if ($scope.matched_user.length > 0) {
                        $scope.matchbtn_show = true;
                    } else {
                        $scope.matchbtn_show = false;
                    }
                        $('#progress-full').hide();
                         $("#migratedmemberlist").modal('show');
                    } else if (response.data.status === 'Expired') {
                        console.log(response.data);
                        $('#progress-full').hide();
                        $("#messageModal").modal('show');
                        $("#messagetitle").text('Message');
                        $("#messagecontent").text(response.data.msg);
                        $scope.logout();
                    } else {
                        $scope.handleFailure(response.data);
                    }
                }, function (response) {
                    console.log(response.data);
                    $scope.handleError(response.data);
                }); 
            }
        }
       
        $scope.addmembertomatch = function (c, p, id) {
            $scope.matchbtn_show = true;
            $scope.matched_userlist = true;
            $scope.name.push({customer: c, participant: p, id: id});
            var removeIndex = $scope.membermatch_array.map(function (item) {
                return item.id;
            }).indexOf(id);
            $scope.membermatch_array.splice(removeIndex, 1);

        }
 
        $scope.removeMatcheduser = function (c, p, id) {
                $scope.membermatch_array.push({customer: c, participant: p, id: id});
                var removeIndex = $scope.name.map(function (item) {
                    return item.id;
                }).indexOf(id);
                $scope.name.splice(removeIndex, 1);
                if ($scope.name.length == 0) {
                    $scope.matched_userlist = false;
                    $scope.matchbtn_show = false;
                }
                if ($scope.matched_user_cp != '') {
                    $scope.matched_userlist = true;
                }
        }
           

             $scope.reloadData=function(cur_tab){
                 $scope.refresh_tab=cur_tab;
             }
            
            $scope.getRankDetails = function(current_tab,m_id,m_rg_id,event){
                $scope.resetMassRank();
                $scope.event_compile=event;
                $scope.evntpara=angular.element(event.target);
               if(current_tab=='R'){
                    $scope.las_adv= angular.element(event.target).parent().next().next('.col8');
               }else if(current_tab=='P'){
                    $scope.las_adv= angular.element(event.target).parent().next().next('.col_hold11');
               }
                $scope.skill_progress = angular.element(event.target.parentElement.nextSibling.firstChild);
                $scope.event_Rank_updt=event.target;
                $scope.m_id=m_id;
                $scope.membership_reg_id=m_rg_id;
                $('#progress-full').show();
                $scope.rank_array = [];
                $http({
                    method: 'POST',
                    url: urlservice.url + 'getAllRankDetails',
                    data: {
                        "company_id": $localStorage.company_id,
                        "membership_id": $scope.m_id,
                        "mem_reg_id": $scope.membership_reg_id
                    },
                    headers: {
                        "Content-Type": 'application/json; charset=utf-8',
                    },
                    withCredentials: true
                   
                }).then(function (response) {
                    if (response.data.status === 'Success') {
                        $scope.rank_array = response.data.msg;
                        $('#progress-full').hide();
                        $scope.existing_rank_array = [];
                        $scope.existing_rank_id = $scope.membership_rank_id = '';
                        $scope.current_tab = current_tab;
                        console.log(response.data.rank_obj);
                        $scope.existing_rank_id = $scope.membership_rank_id = response.data.rank_obj.rank_id;
                        $scope.mem_status = current_tab;
                        for (var j = 0; j < $scope.rank_array.length; j++) {
                            $scope.individual_rank = {};
                            if ($scope.rank_array[j].membership_id ==  $scope.m_id) {
                                $scope.individual_rank['membership_rank_id'] = $scope.rank_array[j].membership_rank_id;
                                $scope.individual_rank['rank_name'] = $scope.rank_array[j].rank_name;
                                $scope.individual_rank['membership_id'] = $scope.rank_array[j].membership_id;
                                $scope.existing_rank_array.push($scope.individual_rank);
                            }
                        }
                        if($scope.mem_status === 'R' || $scope.mem_status === 'P'){
                            $scope.selectedRankId = response.data.rank_obj.rank_id;
                            $scope.selectedRankName = response.data.rank_obj.rank_status;
                            $("#updateRank_modal").modal('show');
                            $("#updateRanktitle").text('Update Rank Details');
                        }
                    } else if (response.data.status === 'Expired') {
                        console.log(response.data);
                        $('#progress-full').hide();
                        $("#messageModal").modal('show');
                        $("#messagetitle").text('Message');
                        $("#messagecontent").text(response.data.msg);
                        $scope.logout();
                    } else {
                        $scope.handleFailure(response.data);
                    }
                }, function (response) {
                    console.log(response.data);
                    $scope.handleError(response.data);
                });
            };            
            
            $scope.skillsProgressPopup = function(membership_reg_id,company_id,event){
                $scope.skill_progress = event.target;
                var skill_obj_value = $scope.skill_progress.attributes["data-skill"].value;
                var skill_obj = JSON.parse(window.atob(skill_obj_value));
                $scope.total_count = skill_obj.total_skill;
                $scope.completed_count = skill_obj.completed_skill;
                $scope.membership_reg_id=membership_reg_id;
                $scope.$broadcast("rank_skill_popup", {"reg_id":membership_reg_id,"company_id":company_id, "completed_count":$scope.completed_count,"total_count":$scope.total_count,"datatable_updt":'Y'});
               
            }

            $scope.$on('skill_upt_dt', function(event,mass) {  
               $scope.completed_count = mass.completed_skill;
               var skill_obj = {"completed_skill":$scope.completed_count,"total_skill":$scope.total_count};
               var skill_json_obj = window.btoa(JSON.stringify(skill_obj));
               angular.element($scope.skill_progress).text($scope.completed_count+' of '+$scope.total_count);
               angular.element($scope.skill_progress).attr('data-skill',skill_json_obj);
            });

             $scope.$on('$viewContentLoaded', function () {
                $('#amemstartdate').datepicker({
                    format: 'mm/dd/yyyy',
                    ignoreReadonly: true
                });               
            });
            
             $scope.$on('$viewContentLoaded', function () {
                $('#amemenddate').datepicker({
                    format: 'mm/dd/yyyy',
                    ignoreReadonly: true
                });                
            });
            
            $scope.dateformatfilter = function (date) {
                if (date !== '0000-00-00' && date !== '') {
                    var datePart = date.split("/");
                    var year = datePart[2];
                    var month = datePart[0];
                    var day = datePart[1];
                    var datevalue = year + '-' + month + '-' + day;
                    return datevalue;
                } else {
                    var datevalue = "";
                    return datevalue;
                }

            };   
            
            $scope.clearSelectedList = function () {
                $scope.removeAttachfile();
                $scope.grppushmsgdata = $scope.grpemailsubjectdata = $scope.grpemailmsgdata = $scope.subscription_type  = '';
                $scope.also_send_email = false;
                $scope.mem_status='';
                if($scope.clearfromindividual){//clear if modal open from individual
                   $scope.selectedData = [];
                }
               $scope.clearfromindividual = false;
            }; 
            
            $scope.filterByDate = function (value,daystype) {
                $scope.current_tab = value;
                $scope.customer_array = [];
                $scope.rank_array = [];
                        if ((this.activestartdate === '' || this.activestartdate === undefined) && (this.activeenddate === '' || this.activeenddate === undefined)) {
                            $scope.membership_startdate_limit = '';
                            $scope.membership_enddate_limit = '';
                        } else {
                            $scope.membership_startdate_limit = $scope.dateformatfilter(this.activestartdate);
                            $scope.membership_enddate_limit = $scope.dateformatfilter(this.activeenddate);
                        }
                $('#progress-full').show();
                $scope.membership_daystype = daystype;
                $scope.loaderhide.loaderhide = true;
                $scope.getcustomers_list('',daystype);
            };
            
            $scope.unblockbounceemail = function () {
                $('#progress-full').show();
                 $("#emailerrormessageModal").modal('hide');
                $http({
                    method: 'POST',
                   url: urlservice.url + 'unblockbounceemail',
                   data: {
                        "bounced_email": $scope.bouncedemail,
                        "company_id": $localStorage.company_id
                    },
                    headers: {
                        "Content-Type": "application/json; charset=utf-8",
                    },
                    withCredentials: true
                }).then(function (response) {
                    if (response.data.status == 'Success') {
                        $('#progress-full').hide();
                        $("#unblockmessageModal").modal('show');
                        $("#unblockmessagecontent").text('Student email unblocked successfully ');
                    }else if(response.data.status === 'Expired'){
                        console.log(response.data);
                        $('#progress-full').hide();
                        $("#messageModal").modal('show');
                        $("#messagetitle").text('Message');
                        $("#messagecontent").text(response.data.msg);
                        $scope.logout();  
                    }else{
                        $scope.handleFailure(response.data);
                    }   
                }, function (response) {
                    console.log(response.data);
                    $scope.handleError(response.data);
                });
                  $('#progress-full').hide();
            };
            
            $scope.clearfilter = function () { // CLEAR THE APPLIED FILTER //                
                    this.activestartdate = '';
                    this.activeenddate = '';
                $scope.clearSelectedList();
            };
            
            $scope.last_advncedays_count = function(date) {
                var today = new Date();
                var dd = today.getDate();
                var mm = today.getMonth() + 1; //January is 0!
                var yyyy = today.getFullYear();
                if (dd < 10) {
                  dd = '0' + dd
                }
                if (mm < 10) {
                  mm = '0' + mm
                }
                today = yyyy + '-' + mm + '-' + dd;
                $scope.today = today;
                var date2 = new Date(today);
                var date1 = new Date(date);
                var timeDiff = Math.abs(date2.getTime() - date1.getTime());
                $scope.dayDifference = Math.ceil(timeDiff / (1000 * 3600 * 24));
                if($scope.dayDifference == 0){
                    return "Today";
                }else{
                    return $scope.dayDifference+" days ago";
                }
            }
            
            $scope.rankupdateChange = function (membership_rank_id) {
               $scope.rankupdatestatus = false;
               if(membership_rank_id != $scope.existing_rank_id){
                   $scope.rankupdatestatus = true;
               }
            };
            
            $scope.updateRankCancel = function () {
                $scope.existing_rank_array = [];
                $scope.existing_rank_id = "";
                $scope.membership_rank_id = "";
                $scope.mem_rank_details = "";
                $scope.mem_status = "";
                $scope.new_adv_date = "";
                $scope.lst_adv_date = "";
                $scope.rankupdatestatus = false;
            };            

            $scope.showRankEditConfirmModel = function (membership_rank_id) { // SHOW RANK EDIT FORM
                $scope.rank_id='';
                $scope.rank_name ='';
                for (var j = 0; j < $scope.rank_array.length; j++) {
                    if ($scope.rank_array[j].membership_rank_id === membership_rank_id) {
                        $scope.rank_id = membership_rank_id;
                        $scope.rank_name = $scope.rank_array[j].rank_name;
                    }
                }
                $("#confirmRank_modal").modal('show');
            };
            $scope.openRankUpdateDateModal = function(){
                $scope.selected_rankupdatedate = '';
                $('#rankUpdateDate_modal').modal('show');
            }
            
            $scope.resetMassRank = function () {
                $scope.mass_rank.update_rank = false;
                $scope.selected_rankupdatedate = '';
            };
            
            $scope.lastAdvancedDateUpdate = function () { // SHOW LAST ADVANCED CHANGES
                $("#rankUpdateDate_modal").modal('hide');
                $("#rankcalender_modal").modal('show');
                $('#lstadvdate').datepicker({
                    format: "yyyy-mm-dd",
                    ignoreReadonly: true,
                    autoclose: true,
                    weekStart: 0,
                }).on("changeDate", function(e) {
                    $scope.selected_rankupdatedate = $scope.formatDates(e.date);
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                });
                $('#lstadvdate').datepicker('setEndDate', new Date());
                $("#lstadvdate .dow:nth-child(1)").html('S '); 
                $("#lstadvdate .dow:nth-child(2)").html('M ');
                $("#lstadvdate .dow:nth-child(3)").html('T ');
                $("#lstadvdate .dow:nth-child(4)").html('W ');
                $("#lstadvdate .dow:nth-child(5)").html('TH ');
                $("#lstadvdate .dow:nth-child(6)").html('F ');
                $("#lstadvdate .dow:nth-child(7)").html('S');
                          
            }
            setTimeout(function () {
                $("#lstadvdate").click(function (event) {
                    var selected_date, selected_month = '';
                    if (event.target.className == "day" || event.target.parentElement.className == "day") {
                        selected_date = document.querySelector("#lstadvdate table .active div").innerHTML;
                        selected_month = document.querySelector("#lstadvdate table .datepicker-switch").innerHTML;
                        if (selected_date && selected_month) {
                            $('#rankcalender_modal').modal('hide');
                            $('#rankUpdateDate_modal').modal('show');
                        }
                    }
                });
            }, 50);
            $scope.formatDates = function (date) {
                var d = new Date(date),
                        month = '' + (d.getMonth() + 1),
                        day = '' + d.getDate(),
                        year = d.getFullYear();
    
                if (month.length < 2)
                    month = '0' + month;
                if (day.length < 2)
                    day = '0' + day;
                return [year, month, day].join('-');
            };
            $scope.cancelChange = function () {
                $scope.membership_rank_id = $scope.existing_rank_id;
                $scope.rankupdatestatus = false;
                $('#rank_value option').prop('selected', function () {
                    return this.defaultSelected;
                });
            };            
            $scope.changeMembershipRankDD = function(obj){
                $scope.selectedRankName = obj.rank_name;
                $scope.selectedRankId = obj.membership_rank_id;
            }
      // ENDING OF EDIT PARTICIPPANT
            $scope.updateRankDetails = function (lst_adv_date) {
                if($scope.mass_rank.update_rank){
                    $scope.exportcheckedmembersexcel('mass_rank');
                    return false;
                }
                $scope.new_rank_value = $scope.rank_name;
                $scope.new_adv_date = $scope.selected_rankupdatedate;
                $('#progress-full').show();
                $http({
                    method: 'POST',
                    url: urlservice.url + 'updateParticipantMembershipRank',
                    data: {
                        "company_id": $localStorage.company_id,
                        "rank_id": $scope.selectedRankId,
                        "membership_reg_id":  $scope.membership_reg_id,
                        "membership_status": $scope.mem_status,
                        "membership_rank": $scope.selectedRankName,
                        "advance_date": $scope.selected_rankupdatedate,
                        "membership_id": $scope.m_id
                    },
                    headers: {
                        "Content-Type": "application/json; charset=utf-8",
                    },
                    withCredentials: true
                }).then(function (response) {
                    if (response.data.status == 'Success') {
                        $scope.resetSelectedVariables = true;
                        $scope.resetDataTableVariables();
                        $scope.dtOptions.withOption('stateLoadParams', function (settings, data) {
                            data.start = 0;
                        });
                        $('#'+$rootScope.curr_datatable).DataTable().rows().invalidate('data').draw();
                        $scope.completed_count =response.data.data.completed_skill;
                        $scope.total_count =response.data.data.total_skill;
                        var skill_obj={"completed_skill":$scope.completed_count,"total_skill":$scope.total_count};
                        var skill_json_obj = window.btoa(JSON.stringify(skill_obj));
                       angular.element($scope.event_Rank_updt).text($scope.rank_name);
                       if ($scope.total_count>0) {
                        angular.element($scope.skill_progress).text($scope.completed_count+' of '+$scope.total_count);
                       } else {
                        angular.element($scope.skill_progress).text('');
                       }
                       
                       angular.element($scope.skill_progress).attr('data-skill',skill_json_obj);
                       $scope.las_adv.text($scope.last_advncedays_count($scope.new_adv_date));
                        $('#progress-full').hide();
                        $("#pushmessageModal").modal('show');
                        $("#pushmessagecontent").text(response.data.msg);

                        $scope.selected_rankupdatedate = '';
                        $scope.rank_id = '';
                        $scope.rank_name = '';
                        $scope.new_adv_date = "";
                        $scope.lst_adv_date = "";
                    } else if (response.data.status === 'Expired') {
                        console.log(response.data);
                        $('#progress-full').hide();
                        $("#messageModal").modal('show');
                        $("#messagetitle").text('Message');
                        $("#messagecontent").text(response.data.msg);
                        $scope.logout();
                    } else if (response.data.status === 'Version') {
                        $('#progress-full').hide();
                        $scope.handleFailure(response.data);
                    } else {
                        if(response.data.msg == 'Access denied.'){
                            $('#progress-full').hide();
                            $scope.handleFailure(response.data);
                        }else{
                            $('#progress-full').hide();
                        $("#pushmessageModal").modal('show');
                        $("#pushmessagetitle").text('Message');
                        $("#pushmessagecontent").text(response.data.msg);
                        } 
                    }
                }, function (response) {
                    console.log(response.data);
                    $scope.handleError(response.data);
                });
            };

            $scope.dateformat = function (date) {
                if(date){
                    $scope.datefor = date.split(" ");
                    return  $scope.datefor[0];
                }
            };
            
            $scope.membershipDetail = function (buyername, participantname, membership_reg_id, current_tab) {
                $localStorage.buyerName = buyername;
                $localStorage.participantName = participantname; 
                $localStorage.currentMembershipregid = membership_reg_id;
                $localStorage.manage_page_from = "";
                $localStorage.page_from = 'members_'+current_tab;
                $location.path('/membershipdetail');
            };

            
            $scope.viewTrials = function(){
                $location.path('/trials');
            };
            
            $scope.openAddNewMemberModal = function () {
                if ($scope.pos_membership_status != 'E' || $scope.membership_enabled != 'Y') {
                    $scope.BPposenable = $scope.pos_membership_status != 'E' ? 'N' : 'Y';
                    $("#ProgramlistPosSettingModal_content").text("Your Memberships section is turned off. Please ensure this is turned on in order to add a new membership registration.");
                    $("#ProgramlistPosSettingModal_button").text("Turn on Memberships");
                    $("#ProgramlistposSettingModal").modal('show');
                } else {
                    $('#addnewmember-modal').modal('show');
                    $localStorage.addmembershipfrommemberstab = true;
                    $scope.memcattitle = $scope.memcatsubtitle = '';
                }
            };
             $scope.programListPosSettingRedirect = function () {
            var page = window.location.href;
            var pagename = page.substr(0, page.lastIndexOf('/') + 1);
            var pagelocation = '';
            if($scope.membership_enabled != 'Y'){
                pagelocation = pagename + 'managemembership';
            }else if ($scope.BPposenable == 'N') {
                pagelocation = pagename + 'posdashboard';
            }
            $localStorage.ParticipantListPosSettingType = 'M';
            window.open(pagelocation, "_blank");
        };
        
            $scope.openAddOrImportMemberModal = function(){
                $('#add-modal').modal('hide');
                $scope.getPOSMemberStatus();
                $('#addormigrate-modal').modal('show');
                $localStorage.addmembershipfrommemberstab = false;
                $scope.enableNext = false;
                $scope.uploaded_csv_file = "";
                $scope.migratefilepreview = "";
            };
             $scope.openMigrateMemberModal = function(){
                if ($scope.processmigration) {
                     return false;
                }
                $('#addnewmigrate-modal').modal('show');
                $localStorage.addmembershipfrommemberstab = false;
            };
            //for getting membership options
            $scope.catchmembershipoptions = function(ind){
                $scope.selectedMembershipCategory = $scope.membershipcatergory[ind];
                $scope.membershipoptions = $scope.membershipcatergory[ind].options;
                $localStorage.redirectmembershipid = $scope.membershipcatergory[ind].membership_id;
            };
             $scope.catchmembershipoptionscall = function(obj){
                $scope.selectedMembershipOption = obj;
                $localStorage.redirectmembershipoptionsid = obj.option_id;
            };
            $scope.redirectaddmembership = function(){
                $('#addnewmember-modal').modal('hide');
                $rootScope.buyer_reg_details.memCatID = $localStorage.redirectmembershipid;
                $rootScope.buyer_reg_details.memCatSubID = $localStorage.redirectmembershipoptionsid;
                $rootScope.buyer_reg_details.currentModal = 'M';
                $scope.openPOS('m','checkout');
            };
            
             $scope.clearmigratemodal = function(){
                $scope.migratefilepreview = "";
                $scope.attachcsvfile = "";
                $scope.uploaded_csv_file = "";
                $scope.enableNext = false;
            };
            
            $scope.migrateCSV = function(){
                $('#progress-full').show();
                if($localStorage.user_login_type == 'O'){
                    $scope.file_name = 'migration_template' +".csv";
                    $rootScope.sendPostMessageToParent({"type":"export_csv", 
                            "export_data":{
                                url: urlservice.url + 'getMigrateCSV',
                                data: {
                                    "company_id": $localStorage.company_id,
                                },
                               "file_name":$scope.file_name
                            }});
                    return false;
                }
                $http({
                    method: 'POST',
                    url: urlservice.url + 'getMigrateCSV',
                    responseType: 'arraybuffer',
                    data: {
                        "company_id": $localStorage.company_id,
                    },
                    headers: {
                        "Content-Type": 'application/json; charset=utf-8',
                    },
                    withCredentials: true
                }).then(function (response) {
                    var response_content =''
                    $("#addnewmigrate-modal").modal('hide');
                    if ('TextDecoder' in window) {
                        // Decode as UTF-8
                        var dataView = new DataView(response.data);
                        var decoder = new TextDecoder('utf8');
                        if($scope.isJson(decoder.decode(dataView))===true){
                            response = JSON.parse(decoder.decode(dataView));
                        }
                    } else {
                        // Fallback decode as ASCII
                        var decodedString = String.fromCharCode.apply(null, new Uint8Array(response.data));
                        if($scope.isJson(decodedString)===true){
                            response = JSON.parse(decodedString);
                        }
                    }
                    if (response_content.status !== undefined && response_content.status === 'Failed') {
                       $('#progress-full').hide();
                       $("#cusmessageModal").modal('show');
                       $("#cusmessagetitle").text('Message');
                       $("#cusmessagecontent").text(response_content.msg);
                    return false;
                    }
                    var msg = '';
                    var linkElement = document.createElement('a');
                    try {
                        var blob = new Blob([response.data], {type: "application/x-download"});
                        var objectUrl = URL.createObjectURL(blob);
                        linkElement.setAttribute('href', objectUrl);
                        linkElement.setAttribute("download", 'migration_template' +".csv"); 
                        var clickEvent = new MouseEvent("click", {
                            "view": window,
                            "bubbles": true,
                            "cancelable": false
                        });
                        linkElement.dispatchEvent(clickEvent);
                    } catch (ex) {
                        msg = ex;
                        console.log(ex);
                    }
                    $('#progress-full').hide();
                    $("#csvSuccessModel").modal('show');
                }, function (response) {
                    $('#progress-full').hide();
                    $("#cusmessageModal").modal('show');
                    $("#cusmessagetitle").text('Message');
                    $("#cusmessagecontent").text("Unable to reach Server, Please Try again.");
                });
            };
            
            $scope.changeimportfileCSV = function(input){ 
                $scope.enableNext = true;
                if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) { 
                    $scope.uploaded_csv_file = e.target.result;
                    console.log($scope.uploaded_csv_file);
                    $scope.validateMigrationCSV('validate');
                }
                reader.readAsDataURL(input.files[0]);
                }
                $scope.$apply(); 
                $('#progress-full').hide();
            };
            $scope.cancel = function () {
                 $scope.migrationDT = false;
                $scope.processmigration = false; 
                $scope.migrationview = false;
                $scope.mig_screen_4 = false;
                $scope.mig_screen_5 = false;
                $scope.mig_screen_6 = false;
                $scope.mig_screen_7 = false;
                $scope.mig_screen_9 = false;
                $scope.mig_screen_10 = false;
                $scope.mig_screen_8 = false;
                $scope.change_made = $scope.search_value = '';
                $scope.cancelmembershipdays = '5';
                $scope.selected = {};
                $scope.selectAll = false;
                $scope.selectedData = [];
                $scope.all_select_flag = $rootScope.all_select_flag_email = "N";
                $rootScope.email_unselected_ids = [];
                $scope.email_unselected_list = false;
                $scope.selectAll = false;
                $rootScope.email_selected_ids = [];
                $scope.selectedData = [];
                $scope.loaderhide.loaderhide = true;
                $scope.getcustomers_list('');
                $scope.migrationview = false;
                $scope.cancelstartdate = '';
                $scope.cancelenddate = '';
                $scope.color_green = 'N';
                $('#li-cancel').addClass('active-event-list').removeClass('event-list-title');
                $scope.dtOptions
                     .withOption('stateLoadParams', function (settings, data) {  data.search.search = ""; })                
           };
             $scope.migration = function () {
                $scope.change_made = $scope.search_value = '';
                $scope.cancelmembershipdays = '5';
                $scope.selected = {};
                $scope.selectAll = false;
                $scope.selectedData = [];
                $scope.all_select_flag = $rootScope.all_select_flag_email = "N";
                $rootScope.email_unselected_ids = [];
                $scope.email_unselected_list = false;
                $scope.selectAll = false;
                $rootScope.email_selected_ids = [];
                $scope.selectedData = [];
                $scope.mig_screen_4 = false;
                $scope.mig_screen_5 = false;
                $scope.mig_screen_6 = false;
                $scope.mig_screen_7 = false;
                $scope.mig_screen_9 = false;
                $scope.mig_screen_11 = false;
                $scope.mig_screen_10 = false;
                $scope.mig_screen_8 = false;
                $scope.migrationview = true;
                $scope.cancelstartdate = '';
                $scope.cancelenddate = '';
                $scope.color_green = 'N';
                $scope.showTable = true;
                $scope.showMigrateTable = false;
                if($scope.isChangeToRedayToMigrate == true)
                {
                    $scope.showTable = false;
                
                    setTimeout(()=>{
                        $scope.showTable = true; 
                        $scope.activeMigrationTab="R";
                        $scope.getcustomers_list('migration');
                    },500) 
                }
                
                else
                {
                    $scope.setDataTableStateLoadParams('migration');    
                        
                }
                       
           };
            
            //migration   
            $scope.gomigration = function (type) {
            $scope.change_made = $scope.search_value = '';
            $scope.selected = {};
            $scope.selectAll = false;
            $scope.selectedData = [];
            $scope.all_select_flag = $rootScope.all_select_flag_email = "N";
            $rootScope.email_unselected_ids = [];
            $scope.email_unselected_list = false;
            $scope.selectAll = false;
            $rootScope.email_selected_ids = [];
            $scope.selectedData = [];
            $scope.activestartdate = '';
            $scope.activeenddate = '';
            $scope.registertypechangeshow = true;
            $scope.registertypechangeshowattended = false;
            $scope.registertypechangeshowattended1 = false; 
            $scope.mig_screen_4 = false;
            $scope.mig_screen_5 = false;
            $scope.mig_screen_6 = false;
            $scope.mig_screen_7 = false;
            $scope.mig_screen_9 = false;
            $scope.mig_screen_11 = false;
            $scope.mig_screen_10 = false;
            $scope.mig_screen_8 = false;
            $scope.processmigration = false;
            $scope.showTable = false;
            $scope.showMigrateTable = false;
            $scope.mapped_cc_id='';
             $('#progress-full').hide();
            if ($scope.both_running_flag == 'Y') {
                $scope.processmigration = true;
                $scope.migrationDT = false;
                $scope.migrationview = false;
                if (type == 'validate' || $scope.validation_running_flag == 'Y') {
                    $scope.mig_screen_4 = true;
                    return false;
                }
                if (type == 'import' || $scope.import_running_flag == 'Y') {
                    $scope.mig_screen_10 = true;
                    return false;
                }
                if ($scope.validate_completed_flag == 'Y' && $scope.import_completed_flag == 'N' && $scope.validate_error_flag == 'Y') {
                    $scope.mig_screen_5 = true;
                    return false;
                } else if ($scope.validate_completed_flag == 'Y' && $scope.import_completed_flag == 'N' && $scope.validate_error_flag == 'N') {
                    $scope.mig_screen_6 = true;
                    return false;
                }
            } 
            else {
                if ($scope.pending_migration_flag == 'N') {
                    $scope.processmigration = true;
                    $scope.migrationview = false;
                }
                if (type == 'validate' || $scope.validation_running_flag == 'Y') {
                    $scope.processmigration = true;
                    $scope.migrationview = false;
                    $scope.migrationDT = false;
                    $scope.mig_screen_4 = true;
                   return false;
                }
                if (type == 'import' || $scope.import_running_flag == 'Y') {
                    $scope.mig_screen_10 = true;
                    return false;
                }
                if ($scope.validate_completed_flag == 'Y' && $scope.import_completed_flag == 'N' && $scope.validate_error_flag == 'Y') {
                    $scope.mig_screen_5 = true;
                    return false;
                } else if ($scope.validate_completed_flag == 'Y' && $scope.import_completed_flag == 'N' && $scope.validate_error_flag == 'N') {
                    $scope.mig_screen_6 = true;
                    return false;
                }

                if ($scope.pending_migration_flag == 'Y') {
                    $scope.processmigration = false;
                    $scope.migrationview = true;
                     $scope.showTable = true;
                     $scope.showMigrateTable = false;
                  $scope.getcustomers_list('migration');
                 $scope.dtOptions
                     .withOption('stateLoadParams', function (settings, data) {  data.search.search = $scope.searchTerm; }) 
                    return false;
                }
            }

        };  
        
        $scope.getUpdatedData = function(){
            $('#inprogress-modal').modal('hide');
            $scope.resetSelectedVariables = true;
            $('#DataTables_Table_0').DataTable().draw(false);
        };
        
        $scope.navigateReadyToMigrate = function(){
            $('#inprogress-modal').modal('show');
            $(".modal-backdrop").css("display", "none");
            if($localStorage.membershippagetype != 'pendingmigration'){
                $localStorage.membershippagetype = 'pendingmigration';
                $rootScope.current_migration_tab = 'P';
                $scope.activeMigrationTab = "R";
                $localStorage.activepagehighlight = $rootScope.activepagehighlight = 'membership';
                $scope.selectedprogram ="M";
                $('#DataTables_Table_0').DataTable().destroy(); 
                $scope.getcustomtitlelist();
                $scope.isChangeToRedayToMigrate = true;
                $scope.getDatatableData();
            }else{
                if($scope.activeMigrationTab == 'R')
                {
                    $scope.resetSelectedVariables = true;
                    $('#'+$rootScope.curr_datatable).DataTable().rows().invalidate('data').draw(false);
                }
                else
                {
                    $scope.changeTab("R");
                }
                
            }
            $scope.show_total_rec = false;
        };
            
        $scope.isChangeToRedayToMigrate = false;
              $scope.validateMigrationCSV = function (type) {
                  $('#addnewmigrate-modal').modal('hide');
                   $scope.inprogress_model_btn = true;
                $scope.navigateReadyToMigrate();
                $http({
                    method: 'POST',
                    url: urlservice.url+'validateMigratedCSV',
                    data: {
                        "company_id": $localStorage.company_id,
                        "uploadedCSV_file":$scope.uploaded_csv_file,
                        "valdate_mode":$scope.valdateFlag,
                        "run_mode":$scope.runMode
                    },
                    headers:{
                        "Content-Type":'application/json; charset=utf-8',
                    },
                    withCredentials: true
                }).then(function (response) {
                    if(response.data.status === 'Success'){
                        if(response.data.msg == 'No Record found in csv'){
                             $('#progress-full').hide(); 
                             $('#inprogress-modal').modal('hide');
                             $scope.handleFailure(response.data);
                        }else{
                            $scope.inprogress_model_btn = false;
                        }
                        if(type == 'validate'){ 
                        }else if(type == 'import'){ 
                            $scope.import_running_flag = 'Y';
                            $scope.gomigration(type);
                        }else if($scope.both_running_flag == 'Y'){
                            $scope.getmigrationdetails("csv");
                        }
                        $('#progress-full').hide();
                    }else if (response.data.status === 'Expired') {
                        $('#progress-full').hide();
                        $("#infomessageModal").modal('show');
                        $("#infomessagetitle").text('Message');
                        $("#infomessagecontent").text(response.data.msg);
                        $scope.logout();
                    }else if(response.data.status === 'Failed'){
                        $('#progress-full').hide(); 
                        $('#inprogress-modal').modal('hide');
                        $scope.handleFailure(response.data);
                    } else {
                        $('#progress-full').hide(); 
                        $scope.handleFailure(response.data);
                        $scope.getmigrationdetails('csv');
                    }   
                }, function (response) {
                    console.log(response.data);
                    $scope.handleError(response.data);
                });
            };
            //csv import
            $scope.openMigrateAttachment = function(){
                document.getElementById("imgInp").value = "";
              document.getElementById('imgInp').click();  
            };
            $scope.sendSubscribeEmail = function(mail){
                $scope.unsubscribe_email = mail;
                $scope.message_type = 'subscribe';
                $scope.subscription_type = 'E';
                $("#sendsubscriptioninviteModal").modal('show');
            };
            $scope.Open_payment_token = function () {
                $('#openmsg3').modal('hide');
                $scope.matchmemberwithtoken('A');
            }
             $scope.getDatatableData = function () {
                 if ($localStorage.membershippagetype == 'pendingmigration' || $localStorage.membershippagetype != '') {
                 $('#progress-full').show();
                $scope.getmigrationdetails_temp('initial');
                $('.active').removeClass('active');
                $('.activeview').removeClass('activeview');
                $('#li-processmigration').addClass('activeview');
                $('#li-migrationDT').addClass('activeview');
                if ($localStorage.page_from == 'memdetail') {
                    $scope.searchTerm = $localStorage.memdetails.temp_searchTerm;
                    $localStorage.page_from = '';
                    $localStorage.memdetails ={};
                } else {
                    $scope.searchTerm = $scope.search_value = '';
                }
                $scope.getMembershipforaddparticipant();
                $scope.getLiveProgramNames('','');
            } else {
                $scope.showTable = true;    
                $scope.showMigrateTable = false;
                $('.active').removeClass('active');
                $('.activeview').removeClass('activeview');
                $('#BP_participants_program').addClass('activeview');
                $scope.search_value = $scope.searchTerm = '';
                if ($localStorage.page_from == 'memdetail') {
                    $localStorage.memfilterdetails = {};
                    $scope.current_tab = $rootScope.filter_options.status.status_type; 
                    $scope.searchTerm = $localStorage.memdetails.temp_searchTerm;
                } else {
                    $scope.selectedprogram = 'P';
                    $scope.clearprogram = true;
                    $localStorage.memdetails = {};
                }
                $scope.loaderhide.loaderhide = true;
                 $scope.getcustomers_list('initial');
                 $scope.dtOptions
                        .withOption('stateLoadParams', function (settings, data) {
                            data.start = 0;
                            data.page = 0;
                            data.iScroller = 0;
                            data.iScrollerTopRow = 0;
                            data.search.search = $scope.searchTerm;
                        });
                        $scope.getmigrationdetails_temp();
                }
                
        };
        
            $scope.getCustomfielddatatable = function () {    
                 $('#progress-full').show();
                $http({
                    method: 'GET',
                    url: urlservice.url + 'getCustomFieldTitle',
                    params: {
                        "company_id": $localStorage.company_id,
                        "from": 'R'
                    },
                    headers: {"Content-Type": 'application/json; charset=utf-8',},
                    withCredentials: true

                }).then(function (response) {
                    if (response.data.status == 'Success') {
                         $('#progress-full').hide();
                        $rootScope.custom_field_title = response.data.msg;
                    if ($localStorage.membershippagetype != 'pendingmigration') {
                        $scope.showTable = true;
                        $scope.showMigrateTable = false;
                        $('.active').removeClass('active');
                        $('.activeview').removeClass('activeview');
                        $('#BP_participants_program').addClass('activeview');
                        $scope.setDataTableStateLoadParams("program");
                    }else{
                        $scope.getcustomtitlelist();
                    }
                    
                    } else if (response.data.status === 'Expired') {
                        // $('#progress-full').hide();
                        $scope.logout();
                    } else {
                        $('#progress-full').hide();
                        $scope.handleFailure(response.data);
                    }
                }, function (response) {
                    console.log(response.data);
                    $scope.handleError(response.data);
                });
            };
            $scope.getMembershipforaddparticipant = function () {    
                $('#progress-full').show();
                $http({
                    method: 'GET',
                    url: urlservice.url + 'getMembershipforaddparticipant',
                    params: {
                        "company_id": $localStorage.company_id
                    },
                    headers: {"Content-Type": 'application/json; charset=utf-8',},
                    withCredentials: true

                }).then(function (response) {
                    if (response.data.status == 'Success') {
                        $scope.membershipcatergory = response.data.msg;
                    } else if (response.data.status === 'Expired') {
                        $scope.logout();
                    } else {
                        $scope.handleFailure(response.data);
                    }
                }, function (response) {
                    console.log(response.data);
                    $scope.handleError(response.data);
                });
            };
            $scope.isCsvValidationFlag = false;
            $scope.checkMailFlagMigration = function (flag) {
                $scope.isCsvValidationFlag = true;
                $scope.include_email_flag=flag;
            };
            $scope.openNewPop = function()
            {
                $scope.isMembershipInfo = false;
                $('#franchise_buyer_detail_modal').modal("show"); 
            }
            $scope.openAddModal = function(){
                if($scope.selectedprogram == "M")
                {
                    if($scope.activeMigrationTab == "P")
                    {
                        $scope.openNewAddModal();
                    }
                    else
                    {
                        $('#add-csv-modal').modal('show');
                    }
                }
                else
                {
                    $('#add-modal').modal('show');
                }

            };
            $scope.openNewAddModal = function(){
                $('#add-modal').modal('hide');
                $('#add-migrate-modal').modal('show');
            };
            $scope.openMigratePop = function()
            {
                $scope.disableForm = true;
                $scope.isClarification = false;
                $('#add-migrate-modal').modal('hide');
                $scope.csv_import_type = 'add';
                $scope.isPendingSave = false;
                $scope.isProgramSave = false;
                $('#franchise_buyer_detail_modal').modal('show');
                $scope.getLiveProgramNames('','migrate_members_individually');
            }
            $scope.openMigrateFilePop = function(type)
            {
                if(type == "one")
                {
                    $("#csvSuccessModel").modal('hide');
                    $('#add-migrate-modal').modal('hide');
                }
                if(type == "two")addnewmigrate-modal
                {
                    $('#add-csv-modal').modal('hide');
                }
                $scope.csvUpload = type;
                $scope.migrationModalIdentifier.addnewmigratemodal = true;
                $scope.migrationCSVfileType = 'single CSV';
                console.log($scope.migrationModalIdentifier);
            }
            $scope.closeMigrateFilePop = function()
            {
                $('#franchise_file_detail_modal').modal('hide');
                $('#add-migrate-modal').modal('show');
            }
            $scope.closeMigratePop = function()
            {
                if($scope.isClarification == true)
                {
                    $scope.clearPopData();
                    $('#franchise_buyer_detail_modal').modal('hide');
                    $scope.getLiveProgramNames('','cancel');
                }
                else
                {
                    if($scope.isPendingSave == false)
                    {
                        $('#franchise_buyer_detail_modal').modal('hide');                       
                        $scope.clearPopData();
                        $scope.isMembershipInfo = false;
                        $('#add-migrate-modal').modal('show');
                        $scope.getLiveProgramNames('','cancel');
                    }
                    if($scope.isPendingSave == true && $localStorage.membershippagetype == 'pendingmigration')
                    {
                        $('#add-migrate-modal').modal('hide');
                        $('#add-modal').modal('hide');
                        $('#franchise_buyer_detail_modal').modal('hide');
                        if($localStorage.membershippagetype == 'pendingmigration')
                        {
                            $scope.resetSelectedVariables = true;
                            $scope.dtOptions
                            .withOption('stateLoadParams', function (settings, data) {
                                data.search.search = "";
                            });
                            $('#DataTables_Table_0').DataTable().draw(false);
                        }
                    }
                    if($scope.isProgramSave == true && $localStorage.membershippagetype != 'pendingmigration' || $scope.isPendingSave == true && $localStorage.membershippagetype != 'pendingmigration')
                    {
                        $('#add-migrate-modal').modal('hide');
                        $('#add-modal').modal('hide');
                        $('#franchise_buyer_detail_modal').modal('hide');
                        $scope.resetSelectedVariables = true;
                        $scope.dtOptions
                            .withOption('stateLoadParams', function (settings, data) {
                                data.search.search = "";
                            });
                            $('#DataTables_Table_0').DataTable().draw(false);
                        
                    }
                }
            }
            $scope.closePop = function()
            {
                $('#add-migrate-modal').modal('hide');
                if($scope.selectedprogram != "M")
                {
                    $('#add-modal').modal('show');
                }
            }
            $scope.closeAddormigrate = function()
            {
                $('#addormigrate-modal').modal('hide');
                $('#add-modal').modal('show');
            }
            $scope.openAddNewMember = function()
            {
                $scope.selectedMembershipCategory = {};
                $scope.selectedMembershipCategory.category_title = 'Select membership category';
                $scope.membershipoptions = {};
                $scope.selectedMembershipOption = {};
                $scope.selectedMembershipOption.option_title = 'Select membership option';
                $localStorage.redirectmembershipoptionsid = '';

                $('#addnewmember-modal').modal('show');
                $('#add-modal').modal('hide');
            }
            $scope.closeAddNewMember = function()
            {
                $('#addnewmember-modal').modal('hide');
                $('#add-modal').modal('show');
            }
            $scope.closeMemberPop = function()
            {
                $scope.isMembershipInfo = false;
            }
            $scope.showCalendar = function (value) {
                if (value == 'dob') 
                {
                    $('#input_dob').datepicker('setDate', $scope.dob);
                    $('#input_dob').datepicker("show");
                }
                if (value == 'endDate') 
                {
                    $('#input_endDate').datepicker('setDate', $scope.endDate);
                    $('#input_endDate').datepicker("show");
                }
                if (value == 'nextPayDate') 
                {
                    if ($scope.endDate) {
                        var endDt = new Date($scope.endDate);
                        endDt.setDate(endDt.getDate() - 0);
                        $('#input_nextPayDate').datepicker('setEndDate', endDt);
                    }else{
                        $('#input_nextPayDate').datepicker('setEndDate', null);
                         $('#input_nextPayDate').datepicker({
                        format: 'M dd, yyyy',
                        ignoreReadonly: true,
                        autoclose: true,
                        startDate: new Date(new Date(). getTime() + 24 * 60 * 60 * 1000)
                    });
                    }
                    $('#input_nextPayDate').datepicker('setDate', $scope.nextPayDate);
                    $('#input_nextPayDate').datepicker("show");
                }
                if (value == 'lastPayDate') 
                {
                    $('#input_lastPayDate').datepicker('setDate', $scope.lastPayDate);
                    $('#input_lastPayDate').datepicker("show");
                }
                    document.querySelector(".datepicker-orient-left .dow:nth-child(1)").innerHTML = 'S ';
                    document.querySelector(".datepicker-orient-left .dow:nth-child(2)").innerHTML = 'M ';
                    document.querySelector(".datepicker-orient-left .dow:nth-child(3)").innerHTML = 'T ';
                    document.querySelector(".datepicker-orient-left .dow:nth-child(4)").innerHTML = 'W ';
                    document.querySelector(".datepicker-orient-left .dow:nth-child(5)").innerHTML = 'TH ';
                    document.querySelector(".datepicker-orient-left .dow:nth-child(6)").innerHTML = 'F';
                    document.querySelector(".datepicker-orient-left .dow:nth-child(7)").innerHTML = 'S ';
            };
            
            $scope.catchparticipantCustomInput = function (id,pClass) {
                        $('#' + id).parents('.'+pClass).addClass('focused');
            };
            $scope.catchCustomInput= function(val)
            {
                if (typeof val.value == "undefined" || val.value == null || val.value == "") {
                    $('#' + val.id).removeClass('filled');
                    $('#' + val.id).parents('.'+val.parentId).removeClass('focused');
                } 
            }
        $scope.catchInputChange = function (id, inputvalue) {
            if (inputvalue) {  
                    if (inputvalue.length > 0) {
                $('#' + id).parents('.input-box').addClass('focused');     
            }
            }
        };
        $scope.checkZero = function()
        {
            $scope.isShowPaymentInfo =false;
            if($scope.paymentAmount > parseFloat(0.00))
            {
                $scope.isShowPaymentInfo =true;
            }
            if($scope.paymentAmount == parseFloat(0.00))
            {
                $scope.nextPayDate = "";
                $scope.lastPayDate = "";
                $scope.paymentType = "CC";
                $scope.card_last_four_digit = "";
            }
        }
        $scope.formatDates = function (date) {
            var d = new Date(date),
                    month = '' + (d.getMonth() + 1),
                    day = '' + d.getDate(),
                    year = d.getFullYear();
            if (month.length < 2)
                month = '0' + month;
            if (day.length < 2)
                day = '0' + day;
            var a = isNaN(day) ? '' : [year, month, day].join('-');
            return a;
        };

        $scope.addIndividualMemberMigrationForm = function () {
            $('#progress-full').show();
            for (i = 0; i < $scope.custom_title_list.length; i++) {
                $scope.custom_title_list[i]["heading"] = "custom_field_description_" +$scope.custom_title_list[i]["custom_field_index"];
                if(!$scope.custom_title_list[i]["value"]){
                    $scope.custom_title_list[i]["value"] = '';
                }
            }
            if(parseFloat($scope.paymentAmount)==0.00)
            {
                $scope.nextPayDate = "";
                $scope.lastPayDate = "";
                $scope.paymentType = "CC";
                $scope.card_last_four_digit = "";
            }
        
                $scope.endDateTemp = $scope.formatDates($('#input_endDate').val());
            if($('#input_class_package').val() > 0){
                $scope.mem_structure = 'NC';
            }else if($scope.endDate){
                $scope.mem_structure = 'C';
            }else{
                $scope.mem_structure = 'OE';
            }
            if($('#input_nextPayDate').val()){
                $scope.nextPayDateTemp = $scope.formatDates($('#input_nextPayDate').val());
            }
            if($scope.dob){
                $scope.dob_temp = $scope.formatDates($scope.dob);
            }
            if($('#input_lastPayDate').val()){
                $scope.lastPayDateTemp = $scope.formatDates($('#input_lastPayDate').val());
            }
            $http({
                method: 'POST',
                url: urlservice.url + 'addIndividualMemberMigrationForm',
                data: {
                    "company_id": $localStorage.company_id,
                    "buyer_first_name": $scope.buyerFname,
                    "buyer_last_name": $scope.buyerLname,
                    "buyer_phone": $scope.buyerPhone,
                    "buyer_email": $scope.buyerEmail,
                    "buyer_address" : $scope.buyerAddress,
                    "city": $scope.buyerCity,
                    "state": $scope.buyerState,
                    "zip": $scope.buyerPcode,
                    "country": $scope.buyerCountry,
                    "participant_first_name" : $scope.participantFname,
                    "participant_last_name" : $scope.participantLname,
                    "participant_bday_date" : $scope.dob_temp,
                    "membership_id" : $scope.selectedProgramID,
                    "membership_option_id" : $scope.selectedMembershipOptionID,
                    "last_payment_date" : $scope.lastPayDateTemp,
                    "membership_end_date" : $scope.endDateTemp,
                    "payment_amount" : $('#input_pamount').val(),
                    "tax_amount" : $scope.taxAmount === '' ? 0 : $scope.taxAmount,
                    "processing_fee_type" : $scope.processing_fee_type,
                    "payment_frequency" : $scope.paymentFrequency == 'Custom' ? 'C' : $scope.paymentFrequency == 'Annually' ? 'A' : $scope.paymentFrequency == 'Weekly' ?  'W' : $scope.paymentFrequency == 'Monthly' ? 'M' : $scope.paymentFrequency == 'Semi-monthly' ? 'B' : 'N',
                    "next_payment_date":$scope.nextPayDateTemp,
                    "payment_method" : $scope.paymentType == 'Manual' ? 'CA' : $scope.paymentType,
                    "card_last_four_digit" : $('#card_last_four_digit').val(),
                    "rank_status" : $scope.selected_rank_name,
                    "rank_id": $scope.selected_rank_id,
                    "custom_field_array" :$scope.custom_title_list,
                    "attendance_limit" : $('#input_attendance_limit').val(),
                    "attendance_limit_frequency" : $scope.classType,
                    "no_of_classes" : $('#input_class_package').val(),
                    "mem_structure" : $scope.mem_structure,
                    "custom_count" : $("#customFrequencyCount").val(),
                    "custom_frequency" :  $scope.optionType == 'Week(s)' ? 'CW' : $scope.optionType == 'Month(s)' ? 'CM' : $scope.optionType == 'Year(s)' ? 'CY' : '',
                    "participant_notes" : $("#input_pnote").val(),
                    "type" : $scope.csv_import_type,
                    "migration_id" : $scope.membership_migration_id,
                    "batch_process_id" : $scope.batch_process_id
                },
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
                withCredentials: true
            }).then(function (response) {
                if (response.data.status === 'Success') {
                    $('#progress-full').hide();
                    $('#franchise_buyer_detail_modal').modal("hide");                   
                    $scope.isPendingSave = false;
                    $scope.isProgramSave = false;
                    $scope.toPendingMigrationList = false;
                    if($scope.csv_import_type == 'update'){
                        $('#update_ready_to_pop_modal').modal("show");
                    }else {
                        if ($scope.paymentAmount == 0)
                        {
                            $("#popMsg").html("Member has been added successfully <br> to the active membership list.");
                            $scope.toPendingMigrationList = false;
                            $scope.isProgramSave = true;
                            $scope.paymentType = "";
                        }
                        if ($scope.paymentAmount > 0)
                        {
                            $("#popMsg").html("Member has been added to <br>pending migration list successfully.");
                            $scope.toPendingMigrationList = true;
                            $scope.isPendingSave = true;
                        }
                        if ($scope.paymentType == "Manual")
                        {
                            $scope.toPendingMigrationList = false;
                            $("#popMsg").html("Member has been added successfully <br> to the active membership list.");
                            $scope.isProgramSave = true;
                        }
                        if ($scope.paymentType != "Manual" && $scope.paymentType != "")
                        {
                            $scope.toPendingMigrationList = true;
                            $("#popMsg").html("Member has been added to <br>pending migration list successfully.");
                            $scope.isPendingSave = true;
                        }
                        $('#member_success_modal').modal("show");
                    }
                    $scope.clearPopData();
                } else if (response.data.status === 'Expired') {
                    $('#progress-full').hide();
                    $scope.logout();
                } else {
                    $('#progress-full').hide();
                    if(response.data.msg == 'Access denied.'){
                        $("#failuremessageModal").modal('show');
                        $("#failuremessagetitle").text('Message');
                        $("#failuremessagecontent").text(response.data.msg);
                        return false;
                    }
                    $scope.handleFailure(response.data);
                }

            }, function (response) {
                console.log(response.data);
                $scope.handleError(response.data);
            });
        }
        $scope.openMigrateMailConformationPop = function ()
        {
            if($scope.dontShowMigrationCheck){
                $scope.updatePaymentTypeClick('migrate_mail');
            }
            $("#migration-mail-pop").modal("hide");
            $("#migration-mail-conformation-pop").modal("show");
        }
        $scope.openMigrateMailPop = function(type)
        {
            $("#migration-mail-conformation-pop").modal("hide");
            if( $scope.mailType == "emailpop")
            {
                $scope.changeTab("P");
            }
            $scope.isCsvValidationFlag = false;
            $("#sent-migration-mail-pop").modal("show");
            $scope.emaileditable = true;
            $scope.migrationview = true;
            $scope.processmigration = true;
            $scope.migrationDT = false;
        }
        $scope.closeMigrateMailPop = function()
        {
            if($scope.dontShowMigrationCheck){
                $scope.updatePaymentTypeClick('migrate_mail');
            }
            $("#migration-mail-pop").modal("hide");
            $scope.showeditandsend = false;
            $scope.emaileditable = false;
            $scope.migrationview = true;
            $scope.processmigration = false;
            $scope.migrationDT = true;
            $scope.migration_email_switch = $scope.migration_email_switch_original;
            if($scope.mailType == "migrate")
            {
                $('#franchise_buyer_detail_modal').modal('show');
            }
           
        }
        $scope.closeMigrateMailConformationPop = function()
        {
            $("#migration-mail-conformation-pop").modal("hide");
            $('#migration-mail-pop').modal("show");
        }
        $scope.goBack = function()
        {
            $("#sent-migration-mail-pop").modal("hide");
            $("#migration-mail-conformation-pop").modal("show");
        }
        $scope.openEditEMail = function()
        {
            $scope.mailType = "editMail";
            $scope.openMigrateMailPop();
        }
        $scope.closeSucessPop = function()
        {
            $('#member_success_modal').modal("hide");
            $scope.clearPopData();
            $scope.membership_options = [];
            $scope.disableForm = true;
            $('#add-migrate-modal').modal('hide');
            if($scope.toPendingMigrationList == true)
            {
                $scope.mailType = "migrate";
                if($scope.dontShowMigrationCheck == false)
                {
                    $("#migration-mail-pop").modal("show");      
                }    
                else
                {
                    $scope.openMigrateMailPop();
                }
            }
            else
            {
                $('#franchise_buyer_detail_modal').modal('show');
            }
        }
        $scope.checkMigrationFormOneFields = function () {
            $scope.isMembershipInfo = true;
        };
            
            $scope.isShowProgramList = false;
            $scope.isProgramSelected = false;
            $scope.option = "";
            $scope.paymentFrequency = "";
            $scope.optionType = "";
            $scope.openProgramPop = function()
            {
                $scope.isShowProgramList = true
            }
            $scope.selectOption=function(value)
            {
                if(value == 'No'){
                    $scope.endDate = '';
                    $scope.lastPayDate = '';
                }
                $scope.option = value;
                $scope.checkMigrationFormTwoFields();
            }
            $scope.selectPaymentFrequency=function(value)
            {
                if(value == "None")
                {
                    $scope.lastPayDate = "";
                }
                $scope.paymentFrequency = value;
                $scope.payment_frequency_err = false;
                $scope.checkMigrationFormTwoFields();
            };
            $scope.selectOptionType = function(value)
            {
                $scope.optionType = value;
                $scope.custom_frequency_type_err = false;
                $scope.checkMigrationFormTwoFields();
            }
            $scope.selectProcessingFeeType = function(value){          
                if(value == 'Absorb Fees'){
                    $scope.processing_fee_type = 1;
                }else{
                    $scope.processing_fee_type = 2;
                }
                $scope.processing_fee_err = false;
            };
            $scope.selectPaymentRank = function(rank_name,rank_id)
            {
                $scope.selected_rank_name = rank_name;
                $scope.selected_rank_id = rank_id;
                $scope.participant_rank_err = false;
            };
            $scope.paymentType = "";
            $scope.showClassType="";
            $scope.checkDntShow = function (type)
            {
                if(type == "ACH")
                {
                    $scope.dontShowmsgForACH = !$scope.dontShowmsgForACH;
                }
                if(type == "CC")
                {
                    $scope.dontShowmsgForCC = !$scope.dontShowmsgForCC;
                }
                if(type == "Manual")
                {
                    $scope.dontShowmsgForManual = !$scope.dontShowmsgForManual;
                }
                if(type == "migrationMail")
                {
                    $scope.dontShowMigrationCheck = !$scope.dontShowMigrationCheck;
                }
            }
            $scope.selectPaymentType = function(value,type)
            {
                $scope.paymentType = value;
                if(type != "update")
                {
                    $scope.payment_type_err = false;
                    if($scope.dontShowmsgForCC == false && $scope.paymentType == 'CC'){
                        $('#payment_type_modal').modal("show");
                    }else if($scope.dontShowmsgForACH == false && $scope.paymentType == 'ACH'){
                         $('#payment_type_modal').modal("show");
                    }else if($scope.dontShowmsgForManual == false && $scope.paymentType == 'Manual'){
                         $('#payment_type_modal').modal("show");
                    }
                }
                $scope.checkMigrationFormTwoFields();
            }
            $scope.selectClassType = function(value)
            {
                if(value == 'CPW'){
                    $scope.showClassType = "Classes per week";
                }else if(value == 'CPM'){
                    $scope.showClassType = "Classes per month"
                }
                else
                {
                    $scope.showClassType = "";
                }
                $scope.attendance_limit_frequency_err = false;
                $scope.classType = value;
            }
            
            $scope.openConformationPop =function()
            {
                if($scope.isClarification == false)
                {
                    $('#conformation_pop_modal').modal("show");
                }
                else
                {
                    $scope.addIndividualMemberMigrationForm();                  
                }
            }
            $scope.migrateMember =function()
            {
                $('#member_success_modal').modal("hide");
                $('#conformation_pop_modal').modal("hide");
                $scope.addIndividualMemberMigrationForm();
            }
            $scope.closeAllPop =function()
            {
                $('#member_success_modal').modal("hide");
                $('#franchise_buyer_detail_modal').modal("hide");
            }
            
            $scope.resetDataTableVariables = function(){
                $scope.selected = {};
                $scope.selectAll = false;
                $scope.all_select_flag = 'N';
                $rootScope.email_unselected_ids = [];
                $scope.email_unselected_list = false;
                $rootScope.email_selected_ids = [];
                $scope.selectedData = [];
                $rootScope.all_select_flag_email = 'N';
                $scope.show_del_flag = 'N';
                $scope.mass_rank.selected_next_rank_count = 0;
                $scope.selected_resend_invite_count = $scope.total_resend_invite_count = 0;
                if(!$scope.$$phase) {
                    $scope.$apply();
               }
            };
            
            $scope.paginationDetailsSetInPreDraw = function(){
                if($localStorage.pagination_details && Object.keys($localStorage.pagination_details).length > 0){
                    $scope.searchClearData =  $localStorage.pagination_details.search;
                    $scope.selectAll = $localStorage.pagination_details.select_all;
                    $rootScope.email_unselected_ids = $localStorage.pagination_details.unselected_ids;
                    $scope.email_unselected_list = $localStorage.pagination_details.email_unselected_list;
                    $rootScope.email_selected_ids = $scope.selectedData = $localStorage.pagination_details.selected_ids;
                    $scope.mass_rank.selected_next_rank_count = $localStorage.pagination_details.selected_next_rank_count;
                    $scope.selected_resend_invite_count = $localStorage.pagination_details.selected_resend_invite_count;
                    
                    if($scope.selectAll && $rootScope.email_unselected_ids.length == 0){
                        $scope.all_select_flag = 'Y';
                        $rootScope.all_select_flag_email = 'Y';
                    }else{
                        $scope.all_select_flag = 'N';
                        $rootScope.all_select_flag_email = 'N';
                        $scope.selectAll = false;
                    }
                }
            };
            
            $scope.paginationDetailsSetInPostDraw = function(){
                if($rootScope.total_receipients <= 0){
                    $('.all_customer_pagination_info').css('display','none');
                    $scope.resetDataTableVariables();
                }else{
                    $('.all_customer_pagination_info').css('display','block');
                }
                if($localStorage.pagination_details && Object.keys($localStorage.pagination_details).length > 0){
                    $localStorage.pagination_details = {};
                    $scope.maintainselected = $scope.selected;
                }
                $scope.deleteIconShowingCondition();
            };
            
            $scope.selectedCountCalculation = function(){  
                if($scope.all_select_flag == 'Y'){
                    $scope.selectCount = $scope.count = $scope.total_receipients;   
                }else if($rootScope.email_unselected_ids.length > 0){
                    $scope.selectCount = $scope.count = $scope.total_receipients - $rootScope.email_unselected_ids.length;
                }else{
                    $scope.selectCount = $scope.count = $scope.selectedData.length;
                }
            };
            
            $scope.deleteIconShowingCondition = function(){
                if(($scope.all_select_flag == 'Y' && $scope.total_receipients == 1) || ($rootScope.email_unselected_ids.length > 0 && (($scope.total_receipients - $rootScope.email_unselected_ids.length) == 1)) || ($rootScope.email_unselected_ids.length == 0 && $scope.selectedData.length == 1)){ // show_del_flag is used to display the delete icon.
                    $scope.show_del_flag = 'Y';
                }else{
                    $scope.show_del_flag = 'N';
                }
            }
            
            $scope.setPaginationDetails = function(type,student_id,participant_id, buyer_type_ref,from){ 
                // set the pagination details
                var pagination_details = {};
                pagination_details.page_from = "program_filter";
                pagination_details.start = $('#'+$rootScope.curr_datatable).DataTable().ajax.params().start;
                pagination_details.order = $('#'+$rootScope.curr_datatable).DataTable().order();
                pagination_details.search = $('#'+$rootScope.curr_datatable).DataTable().ajax.params().search.value.trim();
                pagination_details.select_all = $scope.selectAll;
                pagination_details.selected_ids = $rootScope.email_selected_ids;
                pagination_details.unselected_ids = $rootScope.email_unselected_ids;
                pagination_details.email_unselected_list = $scope.email_unselected_list;
                pagination_details.selected_next_rank_count = $scope.mass_rank.selected_next_rank_count;
                pagination_details.selected_resend_invite_count = $scope.selected_resend_invite_count;
                
                if(type == 'participant'){
                    $scope.setLocalStoragePaginationDetails(pagination_details);
                    return true;
                }else{
                    $scope.openCustomerDetails(student_id,'', buyer_type_ref,from,pagination_details);
                }
            };
            
            $scope.setDataTableStateLoadParams = function(from){ 
                if(from == "program"){
                    $scope.loaderhide.loaderhide = true;
                    $scope.getcustomers_list('', 'initial');
                }else{
                    $scope.getcustomers_list('migration');
                }
                
                if ($localStorage.pagination_details && Object.keys($localStorage.pagination_details).length > 0) {
                    $scope.dtOptions.withOption('stateLoadParams', function (settings, data) {
                                data.search.search = $localStorage.pagination_details.search;
                                data.start = $localStorage.pagination_details.start;
                                data.order = $localStorage.pagination_details.order;
                                data.page = 0;
                                data.iScroller = 0;
                                data.iScrollerTopRow = 0;
                            });
                }else {
                    $scope.search_value = $scope.searchTerm = '';
                    $scope.resetDataTableVariables();
                    $scope.dtOptions
                    .withOption('stateLoadParams', function (settings, data) {
                        data.start = 0;
                        data.page = 0;
                        data.order = [1, 'asc'];
                        data.iScroller = 0;
                        data.iScrollerTopRow = 0;
                        data.search.search = $scope.searchTerm;
                    });
                }
            };
            
            if($localStorage.membershippagetype == 'pendingmigration' || $localStorage.membershippagetype != ''){
                    $scope.selectedprogram = 'M';
                    $rootScope.current_migration_tab = 'P';
                    if (!($rootScope.custom_field_title && (Object.keys($rootScope.custom_field_title).length > 0))) {
                       $scope.getCustomfielddatatable(); 
                    }else{
                        $scope.getcustomtitlelist();
                    }
            }else{
                if ($(window).width() > 680) {
                $scope.selectedprogram = 'P';
                $rootScope.current_migration_tab = '';
                if ($rootScope.custom_field_title && (Object.keys($rootScope.custom_field_title).length > 0)) {
                    console.log($rootScope.custom_field_title, "$rootScope.custom_field_title");
                    $scope.showTable = true;
                    $scope.showMigrateTable = false;
                    $('.active').removeClass('active');
                    $('.activeview').removeClass('activeview');
                    $('#BP_participants_program').addClass('activeview');
                    $scope.search_value = $scope.searchTerm = '';
                    $scope.setDataTableStateLoadParams("program");
                } else {
                    $scope.getCustomfielddatatable();
                }
                } else {
                    $scope.openMobilePortal('/membershiplist');
                }
            };
            
            $rootScope.selected_filter_option = 'Default';

            // MEMBERSHIP MIGRATION START

            $scope.migrationModalIdentifierPopUp = function (modalHide, modalShow) {
                if (modalHide === 'mapMystudioField') {
                    $scope.resetFileData(2);
                }

                if (modalHide) {
                    $scope.migrationModalIdentifier[modalHide] = false;
                }
                if (modalShow) {
                    $scope.migrationModalIdentifier[modalShow] = true;
                }
            }

            $scope.toggleAccordion = function (tab) {
                $scope.activeTab = ($scope.activeTab === tab) ? '' : tab;
            };

            $scope.toggleDropdown = function(event,header,index){
                $scope.migrationObj.temp_csv_index = index;
                $scope.migrationObj.temp_csv_header = header;
                $scope.openDropdown(event, false, '');
            };

            $scope.stopTogglePropogation = function (event) {
                event.stopPropagation();
            }

            $scope.uploadFile = function (files) {
                $scope.getFileData = files[0];
                $('#progress-full').show();

                if (files && files.length > 0) {
                    var fd = new FormData();
                    fd.append('csv_file', $scope.getFileData);
                    fd.append('company_id', $localStorage.company_id);

                    $http({
                        method: 'POST',
                        url:  urlservice.url + 'verifyMigrationCsv',
                        data: fd,
                        headers: {'content-Type':undefined},
                        withCredentials: true,
                        transformRequest: angular.identity
                    }).then(function successCallback(response) {
                        if (response.data.status === 'Success') {
                            $scope.setMigrationObj(response.data);
                            $('#progress-full').hide();
                        } else {
                            $scope.showErrorPopup(response.data.msg);
                        }
                    }, function errorCallback(response) {
                        $scope.showErrorPopup('File uploaded failed.');
                    });
                }
            }

            $scope.submitMigrationForm = function(type = 1) {
                if ($scope.checkRequiredFieldsAreMapped() === false) {
                    return false;
                }

                if (type === 1 && $scope.showDoNotMapFieldsCount() === false) {
                    return false;
                }

                $scope.migrationModalIdentifier['notSelectedMappingField'] = false;

                if ($scope.getFileData == '') {
                    return $scope.showErrorPopup('File not found.');
                }

                $('#progress-full').show();

                var formData = new FormData();
                formData.append('csv_file', $scope.getFileData);
                formData.append('company_id', $localStorage.company_id);
                formData.append('mapping_info', $scope.ignoreDoNotMapFields());

                $http({
                    method: 'POST',
                    url:  urlservice.url + 'membershipMigrationCsvUpload',
                    data: formData,
                    headers: {'content-Type':undefined},
                    withCredentials: true,
                    transformRequest: angular.identity
                }).then(function successCallback(response) {
                    if (response.data.status === 'Success') {
                        $scope.migrationModalIdentifier['CsvImportInProcess'] = true;
                    } else {
                        $scope.showErrorPopup(response.data.msg);
                    }

                    $('#progress-full').hide();
                }, function errorCallback(response) {
                    $scope.showErrorPopup('File uploaded failed.');
                });
            }

            $scope.ignoreDoNotMapFields = function() {
                var tempArray = [];
                $scope.migrationObj.csv_headers.forEach((csvTitle, csvInd) => {
                    if ($scope.migrationObj.mapping_info[csvTitle] !== undefined || $scope.findIn(['P1', 'P2'], $scope.migrationObj.mapping_info[csvTitle]) === false) {
                        tempArray[csvTitle] = $scope.migrationObj.mapping_info[csvTitle];
                    }
                });

                return tempArray;
            }

            $scope.checkRequiredFieldsAreMapped = function() {
                var status = true;
                $scope.migrationObj.mystudio_headers.forEach((msInfo, msInd) => {
                    if (msInfo.is_required === true) {
                        if ($scope.findIn($scope.migrationObj.mapping_field, msInfo.id) !== true) {
                            status = false;
                        }
                    }
                });

                $scope.migrationModalIdentifier['participantNameMap'] = (status === true) ? false : true;

                return status;
            }

            $scope.showDoNotMapFieldsCount = function() {
                var count = 0;
                $scope.migrationObj.csv_headers.forEach((csvTitle, csvInd) => {
                    if ($scope.migrationObj.mapping_info[csvTitle] === undefined || $scope.findIn(['P1', 'P2'], $scope.migrationObj.mapping_info[csvTitle]) === true) {
                        count++;
                    }
                });

                $scope.migrationObj.notMappedCount = count;
                $scope.migrationModalIdentifier['notSelectedMappingField'] = (count > 0) ? true : false;

                return (count > 0) ? false : true;
            }

            $scope.showErrorPopup = function(msg) {
                $("#failuremessageModal").modal('show');
                $("#failuremessagetitle").text('Message');
                $("#failuremessagecontent").text(msg);

                return false;
            }

            $scope.setMigrationObj = function(resJson) {
                $scope.migrationObj.csv_result = resJson;
                $scope.migrationObj.csv_headers = resJson.csv_headers;
                $scope.migrationObj.mystudio_headers = resJson.mystudio_columns;

                $scope.setMappingViewInfo();
            }

            $scope.setMappingViewInfo = function() {
                $scope.migrationObj.csv_headers.forEach((csvTitle, csvInd) => {
                    $scope.migrationObj.mapping_view_info[csvTitle] = 'Please select';
                });
            }

            $scope.resetFileData = function(type = 1) {
                if (type === 1) {
                    $("#fileInput").val("");
                    $scope.getFileData = '';
                    $scope.migrationObj = angular.copy($scope.migrationDefaultObj);
                } else {
                    $scope.migrationObj.mapping_info = [];
                    $scope.migrationObj.mapping_field = [];
                    $scope.migrationObj.temp_csv_index = "";
                    $scope.migrationObj.temp_csv_header = "";

                    $scope.setMappingViewInfo();
                }
            }

            $scope.getMystudioHeaders = function(csvHeaderTitle) {
                var tempObj = [];
                $scope.migrationObj.common_fields.forEach((cInfo, cInd) => {
                    cInfo.is_selected = false;
                    if ($scope.migrationObj.mapping_info[csvHeaderTitle] !== undefined) {
                        if ($scope.migrationObj.mapping_info[csvHeaderTitle] === cInfo.id) {
                            cInfo.is_selected = true;
                        }
                    } else if (cInfo.id === 'P1') {
                        cInfo.is_selected = true;
                    }

                    tempObj.push(cInfo);
                });

                $scope.migrationObj.mystudio_headers.forEach((msInfo, msInd) => {
                    msInfo.is_selected = false;
                    if ($scope.findIn($scope.migrationObj.mapping_field, msInfo.id) === true) {
                        if ($scope.migrationObj.mapping_info[csvHeaderTitle] === undefined) {
                            return;
                        } else if ($scope.migrationObj.mapping_info[csvHeaderTitle] != msInfo.id) {
                            return;
                        } else if ($scope.migrationObj.mapping_info[csvHeaderTitle] == msInfo.id) {
                            msInfo.is_selected = true;
                        }
                    }

                    tempObj.push(msInfo);
                });

                return tempObj;
            }

            $scope.removeDropdownOption = function(event, csvTitle) {
                if ($scope.migrationObj.mapping_info[csvTitle] !== undefined) {
                    $scope.removeArrayItem($scope.migrationObj.mapping_field, $scope.migrationObj.mapping_info[csvTitle]);
                }

                $scope.migrationObj.mapping_info[csvTitle] = 'P1';
                $scope.migrationObj.mapping_view_info[csvTitle] = 'Please select';
                $scope.migrationObj.mapping_field.push('P1');
                event.stopPropagation();
            }

            $scope.findIn = function(obj, val, key = '') {
                return obj.some(function(data) {
                    return (key != '') ? data[key] === val : data === val;
                });
            }

            $scope.selectedList = function (msId, msTitle, csvTitle, csvIndex) {
                if ($scope.migrationObj.mapping_info[csvTitle] !== undefined) {
                    $scope.removeArrayItem($scope.migrationObj.mapping_field, $scope.migrationObj.mapping_info[csvTitle]);
                }

                $scope.migrationObj.mapping_info[csvTitle] = msId;
                $scope.migrationObj.mapping_view_info[csvTitle] = msTitle;
                $scope.migrationObj.mapping_field.push(msId);
            }

            $scope.removeArrayItem = function(obj, item) {
                obj.splice(obj.indexOf(item), 1);     
            }

            $scope.addedEventlistener = function (){
                if(document.getElementsByClassName('mc-dd-options open').length>0){
                    document.getElementsByClassName('mc-dd-options open')[0].classList.remove('open');
                }
                document.body.removeEventListener('click', $scope.addedEventlistener, false);
            };

            $scope.openDropdown = function(event, isOverlay, additionalClasses){
                event.stopPropagation();
                document.getElementsByClassName('mc-dd-options')[0].className = `mc-dd-options mc-scrollbar ${additionalClasses}`;
                const elementPosition = event.currentTarget.getBoundingClientRect();
                if(elementPosition.top+250 > window.innerHeight){
                    if(isOverlay){
                        document.getElementById("dd-options").style.transform = "translateY(calc(-100% + 48px )";    
                    } else {
                        document.getElementById("dd-options").style.transform = "translateY(-100%)";    
                    }
                } 
                // else {
                //     if(isOverlay){
                //         document.getElementById("dd-options").style.transform = "translateY(0)";
                //     } else {
                //         document.getElementById("dd-options").style.transform = "translateY(48px)";
                //     }
                // }
                document.getElementById("dd-options").style.top = elementPosition.top+'px';    
                document.getElementById("dd-options").style.left = elementPosition.left+'px';
                document.getElementById("dd-options").style.width = elementPosition.width+'px';
                document.getElementById("dd-options").classList.add("open");
                document.getElementById("dd-options").scrollTop = 0;
                document.body.addEventListener('click', $scope.addedEventlistener, false);
            }
            
         
            

            // MEMBERSHIP MIGRATION END

            angular.element(document).ready(function () {
                $scope.sidebarResponsiveness();
                $("#memoptionnavlist").css("display", "block");
                $(window).on('resize', function () {
                    $scope.sidebarResponsiveness();
                    if ($location.path() == '/customers' && $('#DataTables_Table_0_filter')[0]) {
                        $("#memoptionnavlist").css("display", "block");
                    }
                });
                jQuery.event.special.touchstart = {
                    setup: function( _, ns, handle ){
                      if ( ns.includes("noPreventDefault") ) {
                        this.addEventListener("touchstart", handle, { passive: false });
                      } else {
                        this.addEventListener("touchstart", handle, { passive: true });
                      }
                    }
                  };
                
                // NEW ANIMATION FORM PLACEHOLDER TO LABELS
                $('.pop-input').focus(function () {
                    $(this).parents('.input-box').addClass('focused');
                });
                $('.pop-input').blur(function () {
                    var inputValue = $(this).val();
                    if (inputValue == "") {
                        $(this).removeClass('filled');
                        $(this).parents('.input-box').removeClass('focused');
                    } else {
                        $(this).addClass('filled');
                    }
                });
            });
            
        } else {
            $location.path('/login');
        }
        
    }
    module.exports =  CustomerController;

