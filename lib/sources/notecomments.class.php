<?php

/***************************************************************************
 *            notecomments.class.php
 *
 *  Jul 05, 07:00:00 2009
 *  Copyright  2009  Istvan Petres (aka P.I.Julius)
 *  me@pijulius.com
 ****************************************************************************/

include_once('lib/comments.class.php');

class _noteComments extends comments {
	var $sqlTable = 'notecomments';
	var $sqlRow = 'NoteID';
	var $sqlOwnerTable = 'notes';
	var $adminPath = 'admin/site/notes/notecomments';
	
	function __construct() {
		parent::__construct();
		
		$this->selectedOwner = __('Note');
		$this->uriRequest = "notes&amp;comments=1";
	}
}

?>