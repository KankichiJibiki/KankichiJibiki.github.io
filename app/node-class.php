<?php
  class Node{
    public $data;
    public $next;
    
    function __construct($data){
      $this->data = $data;
    }
  }

  class Stack{
    public $head;

    public function push($data){
      $temp = $this->head;
      $this->head = new Node($data);
      $this->head->next = $temp;
    }

    public function peek(){
      if ($this->head == null) return null;
      return $this->head->data;
    }

    public function pop(){
      if ($this->head == null) return null;
      $temp = $this->head;
      $this->head = $this->head->next;
      return $temp->data;
    }
  }
?>