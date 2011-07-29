<?php

/***************************************************************************
 *            paging.class.php
 *
 *  Jul 05, 07:00:00 2009
 *  Copyright  2009  Istvan Petres (aka P.I.Julius)
 *  me@pijulius.com
 *  For licensing, see LICENSE or http://jcore.net/license
 ****************************************************************************/
 
class _paging {
	var $limit;
	var $otherArgs;
	var $ignoreArgs;
	var $items = 0;
	var $maxLimit = 100;
	var $defaultLimit = 10;
	var $variable = 'limit';
	var $pageNumbers = 10;
	var $ajax = false;
		
	function __construct($limit = 10, $otherargs = null) {
		$this->limit = "0,".$limit;
		$this->defaultLimit = $limit;
		
		$this->track($this->variable);
		$this->otherArgs = $otherargs;
	}
	
	function parse($variable) {
		preg_match('/([0-9]*?),([0-9]*)/', $variable, $matches);
		
		if (!$matches[2]) {
			$matches[2] = (int)$matches[0];
			$matches[1] = 0;
		}
		
		return array(
			'Start' => (int)$matches[1],
			'End' => (int)((int)$matches[1]+(int)$matches[2]),
			'Limit' => (int)$matches[2]);
	}
	
	function getStart() {
		$limit = $this->parse($this->limit);
		return (int)$limit['Start'];
	}
	
	function getEnd() {
		$limit = $this->parse($this->limit);
		return (int)$limit['End'];
	}
	
	function track($variable) {
		$this->variable = $variable;
		$this->limit = "0,".$this->defaultLimit;
		
		if (isset($_GET[$this->variable])) {
			$limit = $this->parse(str_replace('-', ',', $_GET[$this->variable]));
			$this->limit = $limit['Start'].",".(int)($limit['Limit']-$limit['Start']);
		}
		
		$limit = $this->parse($this->limit);
		
		if (!$limit['Limit'] || $limit['Limit'] > $this->maxLimit) {
			$limit['Limit'] = $this->maxLimit;
			$limit['End'] = $limit['Start']+$limit['Limit'];
		}
		
		$this->limit = (int)$limit['Start'].",".(int)$limit['Limit'];
	}
	
	function reset() {
		$this->limit = "0,".$this->defaultLimit;
	}
	
	function displayLastPage($link) {
		echo
			"<a title='".htmlspecialchars(__("Last page"), ENT_QUOTES)."' " .
				"href='".$link."'>" .
				"<span>&gt;&gt;</span>" .
			"</a>";
	}
	
	function displayNextPage($link) {
		echo
			"<a title='".htmlspecialchars(__("Next page"), ENT_QUOTES)."' " .
				"href='".$link."'>" .
				"<span>&gt;</span>" .
			"</a>";
	}
	
	function displayMorePages($link) {
		echo
			"<span class='comment'" .
				(JCORE_VERSION < '0.5'?
					" style='float: left;'":
					null) .
				">&nbsp;...&nbsp;</span>";
	}
	
	function displayPage($link, $page) {
		echo
			"<a title='".htmlspecialchars(sprintf(__("Page (%s)"), $page), ENT_QUOTES)."' " .
				"href='".$link."'>" .
				"<span>".$page."</span>" .
			"</a>";
	}
	
	function displayLessPages($link) {
		echo
			"<span class='comment'" .
				(JCORE_VERSION < '0.5'?
					" style='float: left;'":
					null) .
				">&nbsp;...&nbsp;</span>";
	}
	
	function displayPrevPage($link) {
		echo
			"<a title='".htmlspecialchars(__("Previous page"), ENT_QUOTES)."' " .
				"href='".$link."'>" .
				"<span>&lt;</span>" .
			"</a>";
	}
	
	function displayFirstPage($link) {
		echo
			"<a title='".htmlspecialchars(__("First page"), ENT_QUOTES)."' " .
				"href='".$link."'>" .
				"<span>&lt;&lt;</span>" .
			"</a>";
	}
	
	function displayTitle() {
		echo __("Pages").":";
	}
	
	function display() {
		$args = null;
		$exp_args = preg_split('/(&amp;|&)/', $this->otherArgs);
		
		for ($i = 0; $i < sizeof($exp_args); $i++) {
			$exp_arg = explode("=", $exp_args[$i]);
			$args .= ", ".$exp_arg[0];
		}
		
		if ($this->ignoreArgs)
			$args .= ", ".$this->ignoreArgs;
		
		if ($this->ajax)
			$args .= ", ajax";
		
		$limit = $this->parse($this->limit);
		
		$totalpagenum = ceil($this->items/$limit['Limit']);
		$currentpagenum = round($limit['End']/$limit['Limit']);
		
		if ($totalpagenum < 2)
			return;
		
		$startpagenum = 1;
		if ($currentpagenum > round($this->pageNumbers/2))
			$startpagenum = $currentpagenum-round($this->pageNumbers/2)+1;
		 
		$endpagenum = $totalpagenum;
		if ($endpagenum > $this->pageNumbers) {
			$endpagenum = $startpagenum+$this->pageNumbers-1;
			
			if ($endpagenum > $totalpagenum) {
				$startpagenum -= $endpagenum-$totalpagenum;
				$endpagenum = $totalpagenum;
			}
		}
	
		echo
			"<div class='paging-outer ".
				($this->ajax?
					"paging-ajax":
					null) .
				"'>" .
				"<div class='paging'>" .
					"<div class='paging-text'>";
		
		$this->displayTitle();
		
		echo
					"</div>";
		
		if ($currentpagenum > 1) {
			$link = url::uri($this->variable.$args).
				"&amp;".$this->variable."=" .
					"0-".$limit['Limit'] .
				$this->otherArgs;
				
			echo
				"<div class='pagenumber pagenumber-first-page'>";
			
			$this->displayFirstPage($link);
			
			echo
				"</div>";
			
			$link = url::uri($this->variable.$args).
				"&amp;".$this->variable."=" .
					round(($currentpagenum-1)*$limit['Limit']-$limit['Limit'])."-".
					round(($currentpagenum-1)*$limit['Limit']) .
				$this->otherArgs;
			
			echo
				"<div class='pagenumber pagenumber-prev-page'>";
			
			$this->displayPrevPage($link);
			
			echo
				"</div>";
		}
		
		if ($startpagenum > 1) {
			$link = url::uri($this->variable.$args).
				"&amp;".$this->variable."=".
					round(($startpagenum-1)*$limit['Limit']-$limit['Limit'])."-".
					round(($startpagenum-1)*$limit['Limit']) .
				$this->otherArgs;
			
			echo
				"<div class='pagenumber pagenumber-lest-pages'>";
				
			$this->displayLessPages($link);
				
			echo
				"</div>";
		}
		
		for ($i = $startpagenum; $i <= $endpagenum; $i++) {
			$link = url::uri($this->variable.$args).
				"&amp;".$this->variable."=".
					round($i*$limit['Limit']-$limit['Limit'])."-".
					round($i*$limit['Limit']) .
				$this->otherArgs;
				
			echo
				"<div class='pagenumber pagenumber-page ".
					($i == $currentpagenum?
						"pagenumber-selected":
						null).
					"'>";
			
			$this->displayPage($link, $i);
			
			echo
				"</div>";
		}
	
		if ($endpagenum < $totalpagenum) {
			$link = url::uri($this->variable.$args).
				"&amp;".$this->variable."=" .
					round(($endpagenum+1)*$limit['Limit']-$limit['Limit'])."-".
					round(($endpagenum+1)*$limit['Limit']) .
				$this->otherArgs;
			
			echo
				"<div class='pagenumber pagenumber-more-pages'>";
			
			$this->displayMorePages($link);
			
			echo
				"</div>";
		}
			
		if ($currentpagenum < $totalpagenum) {
			$link = url::uri($this->variable.$args).
				"&amp;".$this->variable."=" .
					round(($currentpagenum+1)*$limit['Limit']-$limit['Limit'])."-".
					round(($currentpagenum+1)*$limit['Limit']) .
				$this->otherArgs;
			
			echo
				"<div class='pagenumber pagenumber-next-page'>";
				
			$this->displayNextPage($link);
			
			echo
				"</div>";
			
			$link = url::uri($this->variable.$args).
				"&amp;".$this->variable."=" .
					round($totalpagenum*$limit['Limit']-$limit['Limit'])."-".
					round($totalpagenum*$limit['Limit']) .
				$this->otherArgs;
			
			echo
				"<div class='pagenumber pagenumber-last-page'>";
			
			$this->displayLastPage($link);
			
			echo
				"</div>";
		}
				
		echo
					"<div class='clear-both'></div>" .
				"</div>" .
			"</div>";
	}
	
	function setTotalItems($items) {
		$this->items = $items;
	}
}

?>