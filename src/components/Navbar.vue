<template>
    <div>
        <b-navbar type="dark" variant="">
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <!-- Left Aligned -->

                <!-- Center Aligned -->
                <b-navbar-nav class="align-content-center">
                    <b-navbar-brand href="#">Easy Poker</b-navbar-brand>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit">Info</b-button>
                    </b-nav-form>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>

</style>
