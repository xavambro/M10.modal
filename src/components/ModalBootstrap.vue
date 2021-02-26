<template>
    <div>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Abrir ventana modal
        </button>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <slot name="header"></slot>
            </div>
            <div class="modal-body">
                <slot name="body"></slot>
                <p class="mt-2">El cambio de {{euros}} euros en dolares son {{euros | eurToUsd}}$</p>
            </div>
            <div class="modal-footer">
                <slot name="footer"></slot>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script src="../scripts/modalbootstrap.js">
</script>

