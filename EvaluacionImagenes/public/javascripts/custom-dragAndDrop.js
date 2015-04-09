$(document).ready(function(){
        //Counter
        counter = 0;
        
        var $gallery = $( "#gallery" ),
      $trash = $( "#trash" );
 
    // let the gallery items be draggable
    $( "li", $gallery ).draggable({
      cancel: "a.ui-icon", // clicking an icon won't initiate dragging
      revert: "invalid", // when not dropped, the item will revert back to its initial position
      containment: "document",
      helper: "clone",
      cursor: "move"
    });
 
    // let the trash be droppable, accepting the gallery items
    $trash.droppable({
      accept: "#gallery > li ",
      activeClass: "ui-state-highlight",
      drop: function( event, ui ) {
        console.log(ui);
         var element=$(ui.draggable).clone();
          element.addClass("tempclass");
          $(this).append(element);
       // deleteImage( ui.draggable );
      }
    });
 
    // let the gallery be droppable as well, accepting items from the trash
    $gallery.droppable({
      accept: "#trash",
      activeClass: "custom-state-active",
      drop: function( event, ui ) {
          

       alert('holy')
       //$(this).append(element);
       // recycleImage( ui.draggable );
      }
    });



var trash_icon = "<a href='link/to/trash/script/when/we/have/js/off' title='Delete this image' class='ui-icon ui-icon-trash'>Delete image</a>";
    function recycleImage( $item ) {
      $item.fadeOut(function() {
        $item
          .appendTo( $gallery )
          .fadeIn();
      });
    }

    
        //Make element draggable
      /*  $("#options").draggable(
        		{
                   revert: "invalid", // when not dropped, the item will revert back to its initial position
                   containment: "document",
                   helper: "clone",
                   cursor: "move"
        		}
        		
        		/*{
            helper:'clone',
            containment: 'frame',

            //When first dragged
            stop:function(ev, ui) {
            	var pos=$(ui.helper).offset();
            	objName = "#clonediv"+counter
            	$(objName).css({"left":pos.left,"top":pos.top});
            	$(objName).removeClass("drag");


               	//When an existiung object is dragged
                $(objName).draggable({
                	containment: 'parent',
                    stop:function(ev, ui) {
                    	var pos=$(ui.helper).offset();
                    	//console.log($(this).attr("id"));
						//console.log(pos.left)
                        //console.log(pos.top)
                    }
                });
            }
        });

/* $("#frame").droppable({
      accept: "#options > div",
      activeClass: "custom-state-active",
      drop: function( event, ui ) {
       
      }
    });





        //Make element droppable
//        $("#frame").droppable({
//			drop: function(ev, ui) {
//				if (ui.helper.attr('id').search(/drag[0-9]/) != -1){
//					counter++;
//					var element=$(ui.draggable).clone();
//					element.addClass("tempclass");
//					$(this).append(element);
//					$(".tempclass").attr("id","clonediv"+counter);
//					$("#clonediv"+counter).removeClass("tempclass");
//
//					//Get the dynamically item id
//					draggedNumber = ui.helper.attr('id').search(/drag([0-9])/)
//					itemDragged = "dragged" + RegExp.$1
//					//console.log(itemDragged)
//
//					$("#clonediv"+counter).addClass(itemDragged);
//				}
//        	}
//        });


 */


    });